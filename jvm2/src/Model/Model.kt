package Model

import Model.Map.Map
import Model.Abstract.BlankTile
import Model.Abstract.ITile
import Model.Abstract.Resource
import Model.Abstract.Unit
import Model.Enemy.Units.EBuilder
import Model.Map.blassMap.GrassUnits
import Model.Map.graMap.GrassWorld
import Model.Neutral.Buildings.Building
import Model.Neutral.Buildings.GasCollector
import Model.Neutral.Buildings.HQ
import Model.Neutral.Units.Builder
import Model.Neutral.Units.Soldier
import Model.Neutral.Units.Worker
import Model.Player.Buildings.PFactory
import Model.Player.Buildings.PGasCollector
import Model.Player.Buildings.PlayerBuildings
import Model.Player.Units.PBuilder
import Model.Player.Units.PSoldier
import Model.Player.Units.PWorker
import Model.Player.Units.PlayerUnits
import Model.World.GasVent
import Model.World.GrassTile
import Model.World.Minerals

/* This class contains the low-level logic of the game */
class Model (private val width: Int, private val height: Int, private val diff: Int){

    /* the world map, including buildings and terrain  */
    private val world = GrassWorld()
    /* the size of the map */
    private val size = world.size
    /* the units map */
    private val units = GrassUnits()
    /* the combined world/units map */
    private val combined = Map(size)
    /* the video buffer */
    private val buffer = Map(width)
    /* the player's units */
    private val playerUnits = PlayerUnits()
    /* the player's buildings */
    private val playerBuildings = PlayerBuildings()
    /* the enemy's units */
    private val enemyUnits = mutableListOf<ITile>()
    /* the queue of enemy moves to be processed */
    private var enemyMovesQueue = mutableListOf<Move>()
    /* the queue of player moves to be processed */
    private var playerMovesQueue = mutableListOf<Move>()
    /* the queue of player buildings to be built */
    private var playerBuildQueue = mutableListOf<ITile>()
    /* the queue of player units  */
    private var playerCreationQueue = mutableListOf<ITile>()
    /* the player's gathering queue */
    private var playerGatherQueue = mutableListOf<ITile>()
    /* the player's data */
    private val playerData = GameData(diff)
    /* the location of the viewscreen */
    private val viewscreen = Location((size/2), (size/2))
    /* who has won? */
    private var gameWon = 0

    init {
        setupUnits()
        setupBuildings()
        updateView(5, 5)
    }

    private fun setupUnits() {
        for (i in 0 until size) {
            for (j in 0 until size) {
                val unit = units.tiles[j][i]
                if (unit.owner == 1) {
                    playerUnits.units.add(unit)
                }
                else if (unit.owner == 2) {
                    enemyUnits.add(unit)
                }
            }
        }
    }

    private fun setupBuildings() {
        for (i in 0 until size) {
            for (j in 0 until size) {
                val building = world.tiles[j][i]
                if (building.owner == 1) {
                    playerBuildings.units.add(building)
                }
                else if (building.owner == 2) {
                    //enemyBuildings
                }
            }
        }
    }

    fun getViewScreen() : MutableList<Int> {
        return mutableListOf<Int>(viewscreen.row, viewscreen.col)
    }

    fun moveViewUp() : Boolean {
        return updateViewDiff(-1, 0)
    }

    fun moveViewDown() : Boolean {
        return updateViewDiff(1, 0)
    }

    fun moveViewLeft() : Boolean {
        return updateViewDiff(0, -1)
    }

    fun moveViewRight() : Boolean {
        return updateViewDiff(0, 1)
    }

    fun updateViewDiff(diffRow: Int, diffCol: Int) : Boolean {
        val location = Location(viewscreen.row + diffRow, viewscreen.col + diffCol)
        return updateView(location)
    }

    //  if trying to jump to a unit
    fun jumpTo(row: Int, col: Int) : MutableList<Int> {
        var selectRow = 5
        var selectCol = 5
        //  if view cannot jump to the center of the unit,
        //  return offset selectRow and selectCol to compensate
        if (!updateView(row, col)) {
            selectRow = row - viewscreen.row + height/2
            selectCol = col - viewscreen.col + width/2
        }
        //  return the select coordinates
        return mutableListOf(selectRow, selectCol)
    }

    private fun updateView(row: Int, col: Int) : Boolean {
        val location = Location(row, col)
        return updateView(location)
    }

    private fun updateView(location: Location) : Boolean {
        var over = false

        //  if the viewscreen tries to move beyond the map size, override it to the nearest possible location and return false
        if (location.row < height/2) {
            location.row = height/2
            over = true
        }
        if (location.row > size - height/2 - 1) {
            location.row = size - height/2 - 1
            over = true
        }
        if (location.col < width/2) {
            location.col = width/2
            over = true
        }
        if (location.col > size - width/2 - 1) {
            location.col = size - width/2 - 1
            over = true
        }
        //  otherwise, move the viewscreen to the new location
        viewscreen.setLoc(location.row, location.col)
        //  last, update the buffer
        updateBuffer()
        if (over) {
            return false
        }
        return true
    }

    private fun spawnPWorkerInt(row: Int, col: Int) : ITile {
        val location = Location(row, col)
        val pworker = PWorker(location)
        return spawnTile(location, pworker)
    }

    //  spawn a player builder
    private fun spawnPBuilderInt(row: Int, col: Int) : ITile {
        val location = Location(row, col)
        val pbuilder = PBuilder(location)
        return spawnTile(location, pbuilder)
    }

    private fun spawnPSoldierInt(row: Int, col: Int) : ITile {
        val location = Location(row, col)
        val psoldier = PSoldier(location)
        return spawnTile(location, psoldier)
    }

    private fun spawnPFactoryInt(row: Int, col: Int) : ITile {
        val location = Location(row, col)
        val pfactory = PFactory(location)
        return spawnTile(location, pfactory)
    }

    private fun spawnEBuilderInt(row: Int, col: Int) : ITile {
        val location = Location(row, col)
        val ebuilder = EBuilder(location)
        return spawnTile(location, ebuilder)

    }

    //  spawn generic tile
    //  spawning does not factor costs into creation
    private fun spawnTile(location: Location, tile: ITile) : ITile {
        if (!isOnBoard(location) || units.tiles[location.row][location.col].occ || !world.tiles[location.row][location.col].traverse) {
            val nullLocation = Location(-1, -1)
            val nullTile = BlankTile(nullLocation)
            return nullTile
        }
        if (tile is Unit) {
            if (tile.owner == 1) {
                playerUnits.units.add(tile)
            }
            else if (tile.owner == 2) {
                enemyUnits.add(tile)
            }
        }
        else if (tile is Building) {
            if (tile.owner == 1) {
                playerBuildings.units.add(tile)
            }
            else if (tile.owner == 2) {
                //enemyBuildings.add(tile)
            }
        }
        return tile
    }

    fun moveUp(who: Int, row: Int, col: Int) : Boolean {
        return moveDiff(who, row, col, -1, 0)
    }

    fun moveDown(who: Int, row: Int, col: Int) : Boolean {
        return moveDiff(who, row, col, 1, 0)
    }

    fun moveLeft(who: Int, row: Int, col: Int) : Boolean {
        return moveDiff(who, row, col, 0, -1)
    }

    fun moveRight(who: Int, row: Int, col: Int) : Boolean {
        return moveDiff(who, row, col, 0, 1)
    }

    //  allows relative movement
    private fun moveDiff(who: Int, fromRow: Int, fromCol: Int, diffRow: Int, diffCol: Int) : Boolean {
        val fromLocation = Location(fromRow, fromCol)
        val toLocation = Location(fromRow + diffRow, fromCol + diffCol)
        val move = Move(fromLocation, toLocation)
        val tile = getUnitAt(fromLocation)
        if (!isValidMove(move) || who != tile.owner) {
            return false
        }
        if (tile.owner == 1) {
            playerMovesQueue.add(move)
            return true
        }
        else if (tile.owner == 2) {
            enemyMovesQueue.add(move)
            return true
        }
        return false
    }

    //  update the unit in the list with its new location
    private fun moveUnitInList(tile: ITile, to: Location) {
        if (tile.owner == 1) {
            //  get the index of the tile in the list
            val i = playerUnits.units.indexOf(tile)
            //  update the tile with the new location
            if (i != -1) {
                playerUnits.units[i].loc = to
            }
        }
        else if (tile.owner == 2) {
            val i = enemyUnits.indexOf(tile)
            if (i != -1) {
                enemyUnits[i].loc = to
            }
        }
    }
    
    //  perform a single move
    private fun move(move: Move) : Boolean {
        //  get the fromTile, derived from the from of the move
        val fromTile = getUnitAt(move.from)
        if (!isValidMove(move)) {
            return false
        }
        moveUnitInList(fromTile, move.to)
        return true
    }

    //  build a player factory
    fun buildPFactory(row: Int, col: Int) : Boolean {
        val location = Location(-1, -1)
        val factory = PFactory(location)
        return build(row, col, factory)
    }

    fun createPBuilder(row: Int, col: Int) : Boolean {
        val location = Location(row, col)
        val pbuilder = PBuilder(location)
        return create(location, pbuilder)
    }

    fun createPWorker(row: Int, col: Int) : Boolean {
        val location = Location(row, col)
        val pworker = PWorker(location)
        return create(location, pworker)
    }

    //  turns out aborting something already in progress is really complicated
    private fun abort(location: Location) : Boolean {
        val unitAborter = units.tiles[location.row][location.col]
        val worldAborter = world.tiles[location.row][location.col]
        val adjacent1 = isGatherableResourceAdjacent(location)
        val adjacent2 = isOpenAdjacentSpace(location)
        val index1 = playerUnits.units.indexOf(unitAborter)
        val index2 = playerBuildings.units.indexOf(worldAborter)

        if (unitAborter is Unit && playerUnits.units[index1].wait > 0) {
            if (unitAborter is Builder) {
                if (unitAborter.owner == 1) {
                    world.tiles[location.row][location.col].abort = true
                    playerUnits.units[index1].wait = 0
                    return true
                }
                else if (unitAborter.owner == 2) {
                    return true
                }
            }
            else if (unitAborter is Worker) {
                if (unitAborter.owner == 1) {
                    world.tiles[adjacent1.row][adjacent1.col].abort = true
                    playerUnits.units[index1].wait = 0
                    return true
                }
                else if (unitAborter.owner == 2) {
                    return true
                }
            }
        }
        if (worldAborter is Building && playerBuildings.units[index2].wait > 0) {
            if (worldAborter.owner == 1) {
                world.tiles[adjacent2.row][adjacent2.col].abort = true
                playerBuildings.units[index2].wait = 0
                return true
            }
            else if (worldAborter.owner == 2) {
                return true
            }
        }
        return false
    }

    private fun attack(location: Location) : Boolean {
        val attacker = units.tiles[location.row][location.col]
        val possibleLocation = isAttackableTileAdjacent(location)
        if (possibleLocation.row == -1 || possibleLocation.col == -1) {
            return false
        }
        val unitTile = units.tiles[possibleLocation.row][possibleLocation.col]
        val worldTile = world.tiles[possibleLocation.row][possibleLocation.col]

        if (attacker !is Soldier || attacker.wait > 0 || unitTile !is Unit) {
            return false
        }
        if (attacker.owner == unitTile.owner || attacker.owner == worldTile.owner) {
            return false
        }
        if (unitTile is Unit) {
            if (attacker.owner == 1) {
                var index = enemyUnits.indexOf(unitTile)
                enemyUnits[index].health -= 10
                index = playerUnits.units.indexOf(attacker)
                playerUnits.units[index].wait = 3
            }
            else if (attacker.owner == 2) {
                var index = playerUnits.units.indexOf(unitTile)
                playerUnits.units[index].health -= 10
                index = enemyUnits.indexOf(attacker)
                enemyUnits[index].wait = 2
            }
        }
        else if (worldTile is Resource || worldTile is Building) {
            world.tiles[possibleLocation.row][possibleLocation.col].health -= 10
        }
        return true
    }

    private fun gather(location: Location) : Boolean {
        val gatherer = units.tiles[location.row][location.col]
        val index = playerUnits.units.indexOf(gatherer)
        val possibleLocation = isGatherableResourceAdjacent(location)
        if (possibleLocation.row == -1 || possibleLocation.col == -1) {
            return false
        }
        val tile = world.tiles[possibleLocation.row][possibleLocation.col]
        if (gatherer !is Worker || gatherer.wait > 0 || tile !is Resource) {
            return false
        }
        if (tile is GasVent) {
            if (gatherer.owner == 1) {
                playerUnits.units.removeAt(index)
                world.tiles[possibleLocation.row][possibleLocation.col] = PGasCollector(possibleLocation)
                playerGatherQueue.add(tile)
                return true
            }
            else if (gatherer.owner == 2) {
                //add to gather queue
            }
        }
        else if (tile is Minerals) {
            if (gatherer.owner == 1) {
                playerUnits.units[index].wait = 5
                playerGatherQueue.add(tile)
                return true
            }
            else if (gatherer.owner == 2) {
                //add to gather queue
            }
        }
        return false
    }

    private fun create(location: Location, tile : ITile) : Boolean {
        val building = world.tiles[location.row][location.col]
        if (building !is Building || !isAffordable(building.owner, tile) || building.wait > 0) {
            return false
        }
        val possibleLocation = isOpenAdjacentSpace(building.loc)
        if (possibleLocation.row == -1 || possibleLocation.col == -1) {
            return false
        }
        playerData.subResource(tile.minCost, tile.gasCost, tile.nrgCost)
        val index = playerBuildings.units.indexOf(building)
        playerBuildings.units[index].wait = 4
        tile.loc = possibleLocation
        tile.wait = 4
        if (building.owner == 1) {
            playerCreationQueue.add(tile)
        }
        else if (building.owner == 2) {
            //enemyCreationQueue.add(tile)
        }
        return true
    }

    //  build a generic building
    //  building factors costs into creation
    private fun build(row: Int, col: Int, tile : ITile) : Boolean {
        val builder = units.tiles[row][col]
        if (builder !is Builder || !isAffordable(builder.owner, tile) || builder.wait > 0) {
            return false
        }
        val location = builder.loc
        if (!moveLeft(builder.owner, builder.loc.row, builder.loc.col)) {
            if (!moveDown(builder.owner, builder.loc.row, builder.loc.col)) {
                if (!moveRight(builder.owner, builder.loc.row, builder.loc.col)) {
                    if (!moveUp(builder.owner, builder.loc.row, builder.loc.col)) {
                        return false
                    }
                }
            }
        }
        playerData.subResource(tile.minCost, tile.gasCost, tile.nrgCost)
        val index = playerUnits.units.indexOf(builder)
        playerUnits.units[index].wait = 8
        tile.loc = location
        tile.wait = 8
        if (builder.owner == 1) {
            playerBuildQueue.add(tile)
        }
        else if (builder.owner == 2) {
            //enemyBuildQueue.add(tile)
        }
        return true
    }

    fun getPNG(row: Int, col: Int) : String {
        return buffer.tiles[row][col].getPNG()
    }

    fun getUnitList() : PlayerUnits {
        return playerUnits
    }

    fun getBuildingList() : PlayerBuildings {
        return playerBuildings
    }

    //  return the display buffer
    fun getBuffer() : Map {
        updateUnits()
        updateCombined()
        updateBuffer()
        return buffer
    }

    fun getSize() : Int {
        return size
    }

    fun processPlayerWaits() {
        for (i in playerUnits.units) {
            if (i.wait > 0) {
                i.wait -= 1
            }
        }
        for (i in playerBuildings.units) {
            if (i.wait > 0) {
                i.wait -= 1
            }
        }
    }

    //  process all queued moves
    fun processEnemyMoves() {
        val newList = mutableListOf<Move>()
        //  for all moves queued
        for (i in enemyMovesQueue) {
            // complete the move
            move(i)
            //  pop the move
            newList.add(i)
        }
        for (i in newList) {
            enemyMovesQueue.remove(i)
        }
    }

    //  process all queued moves
    fun processPlayerMoves() {
        val newList = mutableListOf<Move>()
        for (i in playerMovesQueue) {
            val tile = getUnitAt(i.from)
            if (tile.wait == 0) {
                // complete the move
                move(i)
                newList.add(i)
            }
        }
        for (i in newList) {
            playerMovesQueue.remove(i)
        }
    }

    fun processPlayerBuildQueue() {
        val newList = mutableListOf<ITile>()
        for (i in playerBuildQueue) {
            if (world.tiles[i.loc.row][i.loc.col].abort) {
                world.tiles[i.loc.row][i.loc.col].abort = false
                playerData.addResource(i.minCost, i.gasCost, i.nrgCost)
                newList.add(i)
            }
            else if (i.wait > 0) {
                i.wait -= 1
            }
            else {
                playerBuildings.units.add(i)
                newList.add(i)
            }
        }
        for (i in newList) {
            playerBuildQueue.remove(i)
        }
    }

    fun processPlayerCreationQueue() {
        val newList = mutableListOf<ITile>()
        for (i in playerCreationQueue) {
            if (world.tiles[i.loc.row][i.loc.col].abort) {
                world.tiles[i.loc.row][i.loc.col].abort = false
                playerData.addResource(i.minCost, i.gasCost, i.nrgCost)
                newList.add(i)
            }
            else if (i.wait > 0) {
                i.wait -= 1
            }
            else {
                playerUnits.units.add(i)
                newList.add(i)
            }
        }
        for (i in newList) {
            playerCreationQueue.remove(i)
        }
    }

    fun processPlayerGatherQueue() {
        val newList = mutableListOf<ITile>()
        for (i in playerGatherQueue) {
            if (world.tiles[i.loc.row][i.loc.col].abort) {
                world.tiles[i.loc.row][i.loc.col].abort = false
                newList.add(i)
            }
            else if (world.tiles[i.loc.row][i.loc.col].health <= 0) {
                newList.add(i)
                world.tiles[i.loc.row][i.loc.col] = GrassTile(i.loc)
            }
            else {
                i.health -= 10
                playerData.addResource(i.minSal, i.gasSal, i.nrgSal)
            }
        }
        for (i in newList) {
            playerGatherQueue.remove(i)
        }
    }

    fun processDeadUnits() {
        val newList = mutableListOf<ITile>()
        for (i in playerUnits.units) {
            if (i.health <= 0) {
                newList.add(i)
            }
        }
        for (i in newList) {
            playerUnits.units.remove(i)
        }
        newList.clear()
        for (i in enemyUnits) {
            if (i.health <= 0) {
                newList.add(i)
            }
        }
        for (i in newList) {
            enemyUnits.remove(i)
        }
    }

    fun processDeadBuildings() {
        val newList = mutableListOf<ITile>()
        for (i in playerBuildings.units) {
            if (i.health <= 0) {
                if (i is Building) {
                    world.tiles[i.loc.row][i.loc.col].abort = true
                }
                newList.add(i)
            }
        }
        for (i in newList) {
            playerBuildings.units.remove(i)
            if (i is GasCollector) {
                world.tiles[i.loc.row][i.loc.col] = GasVent(i.loc)
            }
            else if (i is HQ) {
                gameWon = 2
                world.tiles[i.loc.row][i.loc.col] = GrassTile(i.loc)
            }
            else {
                world.tiles[i.loc.row][i.loc.col] = GrassTile(i.loc)
            }
        }
        newList.clear()
        //add code for enemy buildings
    }

    //  checks if the move is valid
    private fun isValidMove(move: Move) : Boolean {
        //  check if to location is on the board
        if (!isOnBoard(move.to)) {
            return false
        }
        val fromTile = getUnitAt(move.from)
        val toUnitTile = getUnitAt(move.to)
        val toWorldTile = getWorldAt(move.to)
        //  check if fromTile is blank
        if (fromTile.blank) {
            return false
        }
        //  if fromTile is either not occupied or not driveable,
        //  or if the toUnitTile is either occupied or not traversable
        //  or if the toWorldTile is occupied or not traversable
        if (fromTile.wait > 0 || !fromTile.occ || !fromTile.drive || toUnitTile.occ || !toUnitTile.traverse || toWorldTile.occ || !toWorldTile.traverse) {
            return false
        }
        //  check if toTile is blank
        if (toUnitTile.blank) {
            return true
        }
        return true
    }

    private fun updateUnits() {
        for (i in 0 until size) {
            for (j in 0 until size) {
                val location = Location(i, j)
                units.tiles[i][j] = BlankTile(location)
            }
        }
        for (i in playerUnits.units) {
            units.tiles[i.loc.row][i.loc.col] = i
        }
        for (i in playerBuildings.units) {
            world.tiles[i.loc.row][i.loc.col] = i
        }
        for (i in enemyUnits) {
            units.tiles[i.loc.row][i.loc.col] = i
        }
    }

    //  update the combined with what is in the world and units
    private fun updateCombined() {
        // copy the world tiles to the combined first
        for (i in 0 until size) {
            for (j in 0 until size){
                combined.tiles[i][j] = world.tiles[i][j]
            }
        }
        // copy the units into the combined
        for (i in 0 until size) {
            for (j in 0 until size) {
                // check if a unit is actually there in the units
                if (!units.tiles[i][j].blank) {
                    // put the unit into the buffer
                    combined.tiles[i][j] = units.tiles[i][j]
                }
            }
        }
    }

    //  update the buffer with what is in the combined
    private fun updateBuffer() {
        var y = 0
        for (i in viewscreen.row - height/2 until height + viewscreen.row - height/2) {
            var x = 0
            for (j in viewscreen.col - height/2 until height + viewscreen.col - height/2) {
                buffer.tiles[y][x] = combined.tiles[i][j]
                x += 1
            }
            y += 1
        }
    }

    fun getLocationAt(row: Int, col: Int) : MutableList<Int> {
        val tile =  buffer.tiles[row][col]
        return mutableListOf<Int>(tile.loc.row, tile.loc.col)
    }

    fun getCommandsAt(row: Int, col: Int) : MutableList<String> {
        return buffer.tiles[row][col].commands
    }

    fun getStatusAt(row: Int, col: Int) : MutableList<String> {
        val tile = buffer.tiles[row][col]
        if (tile.use) {
            if (tile.wait > 0) {
                return mutableListOf<String>("Working for " + tile.wait + " more seconds", "Health: " + tile.health)
            }
            else {
                return mutableListOf<String>("Health: " + tile.health)
            }
        }
        return mutableListOf<String>("No status available")
    }

    fun getResources() : MutableList<Int> {
        return playerData.getResources()
    }

    fun issueCommandsAt(row: Int, col: Int, command: Int) : String {
        val tile = buffer.tiles[row][col]
        val location = tile.loc
        if (tile is PBuilder) {
            if (command == 0) {
                if (buildPFactory(location.row, location.col)) {
                    return "PFactory is being built"
                }
            }
            if (command == 1) {
                if (abort(location)) {
                    return "Aborting"
                }
            }
        }
        else if (tile is PFactory) {
            if (command == 0) {
                if (createPBuilder(location.row, location.col)) {
                    return "PBuilder creation in progress"
                }
            }
            if (command == 1) {
                if (createPWorker(location.row, location.col)) {
                    return "PWorker creation in progress"
                }
            }
            if (command == 2) {
                if (abort(location)) {
                    return "Aborting"
                }
            }
        }
        else if (tile is PWorker) {
            if (command == 0) {
                if (gather(location)) {
                    return "Gathering resources"
                }
            }
            if (command == 1) {
                if (abort(location)) {
                    return "Aborting"
                }
            }
        }
        else if (tile is PSoldier) {
            if (command == 0) {
                if (attack(location)) {
                    return "Attacking"
                }
            }
        }
        return "Command failed"
    }

    //  private helper to find a unit at a location
    private fun getUnitAt(location: Location) : ITile {
        return units.tiles[location.row][location.col]
    }

    private fun getWorldAt (location: Location) : ITile {
        return world.tiles[location.row][location.col]
    }

    //  check if to location is on the board
    private fun isOnBoard(location: Location) : Boolean {
        if (location.row >= size || location.row < 0 || location.col >= size || location.col < 0) {
            return false
        }
        return true
    }

    private fun isOpenAdjacentSpace(location: Location) : Location {
        val leftLocation = Location(location.row, location.col - 1)
        val rightLocation = Location(location.row, location.col + 1)
        val downLocation = Location(location.row + 1, location.col)
        val upLocation = Location(location.row - 1, location.col)
        val aList = mutableListOf<Location>(leftLocation, rightLocation, downLocation, upLocation)
        for (i in aList) {
            if (isOnBoard(i) && !units.tiles[i.row][i.col].occ && !world.tiles[i.row][i.col].occ) {
                return i
            }
        }
        val nullLocation = Location(-1, -1)
        return nullLocation
    }

    private fun isGatherableResourceAdjacent(location: Location) : Location {
        val leftLocation = Location(location.row, location.col - 1)
        val rightLocation = Location(location.row, location.col + 1)
        val downLocation = Location(location.row + 1, location.col)
        val upLocation = Location(location.row - 1, location.col)
        val aList = mutableListOf<Location>(upLocation, downLocation, leftLocation, rightLocation)
        for (i in aList) {
            if (isOnBoard(i) && world.tiles[i.row][i.col].health > 0) {
                return i
            }
        }
        val nullLocation = Location(-1, -1)
        return nullLocation
    }

    private fun isAttackableTileAdjacent(location: Location) : Location {
        val leftLocation = Location(location.row, location.col - 1)
        val rightLocation = Location(location.row, location.col + 1)
        val downLocation = Location(location.row + 1, location.col)
        val upLocation = Location(location.row - 1, location.col)
        val aList = mutableListOf<Location>(upLocation, downLocation, leftLocation, rightLocation)
        val removeList = mutableListOf<Location>()
        for (i in aList) {
            if (!isOnBoard(i)) {
                removeList.add(i)
            }
        }
        for (i in removeList) {
            aList.remove(i)
        }
        for (i in aList) {
            val worldTile = world.tiles[i.row][i.col]
            val unitTile = units.tiles[i.row][i.col]
            if (isOnBoard(i) && (worldTile.health > 0 || unitTile.health > 0)) {
                return i
            }
        }
        val nullLocation = Location(-1, -1)
        return nullLocation
    }

    private fun isAffordable(buyer: Int, tile : ITile) : Boolean {
        var data = GameData(-1)
        if (buyer == 1) {
            data = playerData
        }
        else if (buyer == 2) {
            //data = enemyData
        }
        if (tile.minCost > data.minerals || tile.gasCost > data.gas || tile.nrgCost > data.nrg) {
            return false
        }
        return true
    }
}