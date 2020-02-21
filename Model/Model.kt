package Model

import Model.Abstract.ITile
import Model.Player.PBuilder
import Model.World.GrassTile

/* Model class, attempting to conform to MVC protocol */
class Model(private val width: Int, private val height: Int) {
    /* the world map, including buildings and terrain  */
    private val world = Map()
    /* the units map */
    private val units = Map()
    /* the video buffer */
    private val buffer = Map()
    /* the session data */
    private val data = GameData(0)
    /* the queue of moves to be processed */
    private val movesQueue = mutableListOf<Move>()

    //  setup the map
    fun setupMap() {
        for (i in 0..height) {
            val rowArray = arrayOf<ITile?>()
            for (j in 0..width) {
                val location = Location(i, j)
                rowArray[j] = GrassTile(location, false)
            }
            world.tiles[i] = rowArray
        }
    }

    //  update the buffer with what is in the world and units
    fun updateBuffer() {
        // copy the world tiles to the buffer first
        for (i in 0..height) {
            buffer.tiles[i] = world.tiles[i]
        }
        // copy the units into the buffer
        for (i in 0..height) {
            for (j in 0..width) {
                // check if a unit is actually there in the units
                if (units.tiles[i][j] != null) {
                    // put the unit into the buffer
                    buffer.tiles[i][j] = units.tiles[i][j]
                }
            }
        }
    }

    //  spawn a player builder
    fun spawnPBuilder(location: Location) {
        spawnUnit(location, "pbuilder")
    }

    //  private method to allow abstraction to controller
    private fun spawnUnit(location: Location, type: String) {
        if (type.equals("pbuilder")) {
            units.tiles[location.row][location.col] = PBuilder(location)
        }
    }

    //  checks if the move is valid
    fun isValidMove(move: Move, fromTile: ITile, toTile: ITile) : Boolean {
        //  if fromTile is either not occupied or not driveable,
        //  or if the toTile is either occupied or not traversable
        if (!fromTile.occ || !fromTile.drive || toTile.occ || !toTile.traverse) {
            return false
        }
        return true
    }

    //  perform a single move
    fun move(move: Move) {
        //  get the fromTile, derived from the from of the move
        val fromTile = getUnitAt(move.from)
        //  check if null first
        if (fromTile == null)
            return
        //  set the new location for the tile
        fromTile.loc = move.to
        //  put the unit where it wants to go
        putUnitAt(move.to, fromTile)
        //  set the previous tile to empty
        putUnitAt(move.from, null)
    }

    //  return the display buffer
    fun getBuffer() : Map {
        return buffer
    }

    //  return the session data
    fun getData() : GameData {
        return data
    }

    //  process all queued moves
    fun processMoves() {
        //  for all moves queued
        for (i in movesQueue) {
            // the fromTile is derived from the move.from
            val fromTile = getUnitAt(i.from)
            //  check if null
            if (fromTile == null)
                return
            //  set the new location for the tile
            fromTile.loc = i.to
            //  put the unit where it wants to go
            putUnitAt(i.to, fromTile)
            //  set the previous tile to empty
            putUnitAt(i.from, null)
            //  pop the move
            movesQueue.remove(i)
        }
    }

    //  private helper to set the unit at a location
    private fun putUnitAt(location: Location, fromTile: ITile?) {
        units.tiles[location.row][location.col] = fromTile
    }

    //  private helper to find a unit at a location
    private fun getUnitAt(location: Location) : ITile? {
        return units.tiles[location.row][location.col]
    }
}