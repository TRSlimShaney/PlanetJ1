import { BinarySemaphore, Constants, Logger } from "./Utilities"
import { IntegerDivision as divide } from "./Utilities"
import { ALocation as ALocation } from "./Utilities"
import { GameData as GameData } from "./Utilities"
import { Move as Move } from "./Utilities"
import { GrassWorld as GrassWorld } from "./Map/GrassMap/GrassWorld"
import { GrassUnits as GrassUnits } from "./Map/GrassMap/GrassUnits"
import { AMap as AMap } from "./Map/Map"
import { PlayerUnits as PlayerUnits } from "./Player/Units/PlayerUnits"
import { PlayerBuildings as PlayerBuildings } from "./Player/Buildings/PlayerBuildings"
import { ITile as ITile } from "./Abstract/ITile"
import { PBuilder as PBuilder } from "./Player/Units/PBuilder"
import { PWorker as PWorker } from "./Player/Units/PWorker"
import { PSoldier as PSoldier } from "./Player/Units/PSoldier"
import { PFactory as PFactory } from "./Player/Buildings/PFactory"
import { BlankTile as BlankTile } from "./Abstract/BlankTile"
import { EBuilder as EBuilder } from "./Enemy/Units/EBuilder"
import { GasVent as GasVent } from "./World/GasVent"
import { Minerals as Minerals } from "./World/Minerals"
import { PGasCollector as PGasCollector } from "./Player/Buildings/PGasCollector"
import { GrassTile as GrassTile } from "./World/GrassTile"



export class Model {
    private world: GrassWorld
    private size: number
    private units: GrassUnits
    private combined: AMap
    private buffer: AMap
    private playerUnits: PlayerUnits
    private playerBuildings: PlayerBuildings
    private enemyUnits: Array<ITile>
    private enemyMovesQ: Array<Move>
    private playerMovesQ: Array<Move>
    private playerBuildQ: Array<ITile>
    private playerCreationQ: Array<ITile>
    private playerGatherQ: Array<ITile>
    private playerData: GameData
    viewscreen: ALocation
    private gameWon: number
    private gameSemaphore: BinarySemaphore
    private logger: Logger
    

    constructor(private width: number, private height: number, private diff: number, enableLog: boolean) {
        //  game data
        this.world = new GrassWorld()
        this.size = this.world.size
        this.units = new GrassUnits()
        this.combined = new AMap(this.size)
        this.buffer = new AMap(this.width)
        this.playerUnits = new PlayerUnits()
        this.playerBuildings = new PlayerBuildings()
        this.enemyUnits = new Array<ITile>()
        this.enemyMovesQ = new Array<Move>()
        this.playerMovesQ = new Array<Move>()
        this.playerBuildQ = new Array<ITile>()
        this.playerCreationQ = new Array<ITile>()
        this.playerGatherQ = new Array<ITile>()
        this.playerData = new GameData(this.diff)
        this.viewscreen = new ALocation(divide(this.size, 2), divide(this.size, 2))
        this.gameWon = 0
        this.logger = new Logger(enableLog, "MODEL", "MODEL_LOGGER")
        //  sempahores
        this.gameSemaphore = new BinarySemaphore("gameSemaphore")
        //  game setup
        this.setupUnits()
        this.setupBuildings()
        this.updateView(new ALocation(5, 5))
        this.logger.debug("Leaving constructor")
    }

    private setupUnits() {
        this.logger.entering("setupUnits")
        this.lock()
        for (let i = 0; i < this.size; ++i) {
            for (let j = 0; j < this.size; ++j) {
                const unit = this.units.tiles[i][j]
                if (unit.owner == Constants.prototype.PLAYER_1) {
                    this.playerUnits.units.push(unit)
                }
                else if (unit.owner === Constants.prototype.CPU) {
                    this.enemyUnits.push(unit)
                }
            }
        }
        this.unlock()
    }

    private setupBuildings() {
        this.logger.entering("setupBuildings")
        this.lock()
        for (let i = 0; i < this.size; ++i) {
            for (let j = 0; j < this.size; ++j) {
                const building = this.world.tiles[i][j]
                if (building.owner == Constants.prototype.PLAYER_1) {
                    this.playerBuildings.units.push(building)
                }
                else if (building.owner === Constants.prototype.CPU) {
                    //enemybuildings
                }
            }
        }
        this.unlock()
    }

    private lock() {
        this.logger.entering("lock")
        this.gameSemaphore.lock()
    }

    private unlock() {
        this.logger.entering("unlock")
        this.gameSemaphore.unlock()
    }

    

    updateViewDiff(diffRow: number, diffCol: number): boolean {
        this.logger.entering("updateViewDiff")
        const loc = new ALocation(this.viewscreen.row + diffRow, this.viewscreen.col + diffCol)
        return this.updateView(loc)
    }

    private updateView(loc: ALocation): boolean {
        this.logger.entering("updateView")
        let over = false
        if (loc.row < divide(this.height, 2)) {
            loc.row = divide(this.height, 2)
            over = true
        }
        if (loc.row > this.size - divide(this.height, 2) - 1) {
            loc.row = this.size - divide(this.height, 2) - 1
            over = true
        }
        if (loc.col < divide(this.width, 2)) {
            loc.col = divide(this.width, 2)
            over = true
        }
        if (loc.col > this.size - divide(this.width, 2) - 1) {
            loc.col = this.size - divide(this.width, 2) - 1
            over = true
        }
        this.viewscreen.setLoc(loc.row, loc.col)
        this.updateBuffer()
        if (over) {
            return false
        }
        return true
    }




    private spawnPWorker(loc: ALocation): ITile {
        this.logger.entering("spawnPWorker")
        const pworker = new PWorker(loc)
        return this.spawnTile(loc, pworker)
    }

    private spawnPBuilder(loc: ALocation): ITile {
        this.logger.entering("spawnPBuilder")
        const pbuilder = new PBuilder(loc)
        return this.spawnTile(loc, pbuilder)
    }

    private spawnPSoldier(loc: ALocation): ITile {
        this.logger.entering("spawnPSoldier")
        const psoldier = new PSoldier(loc)
        return this.spawnTile(loc, psoldier)
    }

    private spawnPFactory(loc: ALocation): ITile {
        this.logger.entering("spawnPFactory")
        const pfactory = new PFactory(loc)
        return this.spawnTile(loc, pfactory)
    }

    private spawnEBuilder(loc: ALocation): ITile {
        this.logger.entering("spawnEBuilder")
        const ebuilder = new EBuilder(loc)
        return this.spawnTile(loc, ebuilder)
    }



    private spawnTile(loc: ALocation, tile: ITile): ITile {
        this.logger.entering("spawnTile")
        this.lock()
        if (!this.isOnBoard(loc) || this.units.tiles[loc.row][loc.col].occ || !this.world.tiles[loc.row][loc.col].traverse) {
            const nullLoc = new ALocation(-1, -1)
            const nullTile = new BlankTile(nullLoc)
            this.unlock()
            return nullTile
        }
        if (tile instanceof Unit) {
            if (tile.owner === Constants.prototype.PLAYER_1) {
                this.playerUnits.units.push(tile)
            }
            else if (tile.owner === Constants.prototype.CPU) {
                this.enemyUnits.push(tile)
            }
        }
        else if (tile instanceof Building) {
            if (tile.owner === Constants.prototype.PLAYER_1) {
                this.playerBuildings.units.push(tile)
            }
            else if (tile.owner === Constants.prototype.CPU) {
                //enemybuildings push tile
            }
        }
        this.unlock()
        return tile
    }




    

    moveDiff(who: number, loc: ALocation, diffRow: number, diffCol: number): boolean {
        this.logger.entering("moveDiff")
        this.lock()
        const from = loc
        const to = new ALocation(from.row + diffRow, from.col + diffCol)
        const move = new Move(from, to)
        const tile = this.getUnitAt(from)
        if (!this.isValidMove(move) || who !== tile.owner) {
            this.unlock()
            return false
        }
        if (tile.owner === Constants.prototype.PLAYER_1) {
            this.playerMovesQ.push(move)
            this.unlock()
            return true
        }
        else if (tile.owner === Constants.prototype.CPU) {
            this.enemyMovesQ.push(move)
            this.unlock()
            return true
        }
        this.unlock()
        return false
    }

    private moveUnitInList(tile: ITile, to: ALocation) {
        this.logger.entering("moveUnitInList")
        this.unlock()
        if (tile.owner === Constants.prototype.PLAYER_1) {
            const i = this.playerUnits.units.findIndex(a => a === tile)
            if (i !== -1) {
                this.playerUnits.units[i].loc = to
            }
        }
        else if (tile.owner === Constants.prototype.CPU) {
            const i = this.enemyUnits.findIndex(a => a === tile)
            if (i !== -1) {
                this.enemyUnits[i].loc = to
            }
        }
        this.unlock()
    }

    private move(move: Move): boolean {
        this.logger.entering("move")
        const from = this.getUnitAt(move.from)
        if (!this.isValidMove(move)) {
            return false
        }
        this.moveUnitInList(from, move.to)
        return true
    }

    private buildPFactory(to: ALocation): boolean {
        this.logger.entering("buildPFactory")
        const temp = new ALocation(-1, -1)
        const pfactory = new PFactory(temp)
        return this.build(to, pfactory)
    }

    private createPBuilder(to: ALocation): boolean {
        this.logger.entering("createPBuilder")
        const temp = new ALocation(-1, -1)
        const pbuilder = new PBuilder(temp)
        return this.build(to, pbuilder)
    }

    private createPWorker(to: ALocation): boolean {
        this.logger.entering("createPWorker")
        const temp = new ALocation(-1, -1)
        const pworker = new PWorker(to)
        return this.build(to, pworker)
    }

    private abort(loc: ALocation): boolean {
        this.logger.entering("abort")
        this.lock()
        const unitAborter = this.getUnitAt(loc)
        const i1 = this.playerUnits.units.findIndex(a => a === unitAborter)
        if (unitAborter instanceof Unit && this.playerUnits.units[i1].wait > 0) {
            if (unitAborter instanceof Builder) {
                if (unitAborter.owner === Constants.prototype.PLAYER_1) {
                    this.world.tiles[loc.row][loc.col].abort = true
                    this.playerUnits.units[i1].wait = 0
                    this.unlock()
                    return true
                }
                else if (unitAborter.owner === Constants.prototype.CPU) {
                    this.unlock()
                    return true
                }
            }
            else if (unitAborter instanceof Worker) {
                if (unitAborter.owner === Constants.prototype.PLAYER_1) {
                    const adj1 = this.isGatherableResourceAdjacent(loc)
                    this.world.tiles[adj1.row][adj1.col].abort = true
                    this.playerUnits.units[i1].wait = 0
                    this.unlock()
                    return true
                }
                else if (unitAborter.owner === Constants.prototype.CPU) {
                    this.unlock()
                    return true
                }
            }
        }
        const worldAborter = this.world.tiles[loc.row][loc.col]
        const i2 = this.playerBuildings.units.findIndex(a => a === worldAborter)
        if (worldAborter instanceof Building && this.playerBuildings.units[i2].wait > 0) {
            if (worldAborter.owner === Constants.prototype.PLAYER_1) {
                const adj2 = this.isOpenAdjacentSpace(loc)
                this.world.tiles[adj2.row][adj2.col].abort = true
                this.playerBuildings.units[i2].wait = 0
                this.unlock()
                return true
            }
            else if (worldAborter.owner === Constants.prototype.CPU) {
                this.unlock()
                return true
            }
        }
        this.unlock()
        return false
    }

    private attack(loc: ALocation): boolean {
        this.logger.entering("attack")
        this.lock()
        const attacker = this.getUnitAt(loc)
        const possLoc = this.isAttackableTileAdjacent(loc)
        if (possLoc.row === -1 || possLoc.col === -1) {
            //this.playerBuildings.units[i2].wait = 0
            this.unlock()
            return false
        }
        const unitTile = this.getUnitAt(possLoc)
        const worldTile = this.world.tiles[possLoc.row][possLoc.col]
        if (attacker! instanceof Soldier || attacker.wait > 0 || unitTile! instanceof Unit) {
            //this.playerBuildings.units[i2].wait = 0
            this.unlock()
            return false
        }
        if (attacker.owner === unitTile.owner || attacker.owner === worldTile.owner) {
            //this.playerBuildings.units[i2].wait = 0
            this.unlock()
            return false
        }
        if (unitTile instanceof Unit) {
            if (attacker.owner === Constants.prototype.PLAYER_1) {
                let i = this.enemyUnits.findIndex(a => a === unitTile)
                this.enemyUnits[i].health -= 10
                i = this.playerUnits.units.findIndex(a => a === attacker)
                this.playerUnits.units[i].wait = 3
            }
            else if (attacker.owner === Constants.prototype.CPU) {
                let i = this.playerUnits.units.findIndex(a => a === unitTile)
                this.playerUnits.units[i].health -= 10
                i = this.enemyUnits.findIndex(a => a === attacker)
                this.enemyUnits[i].wait = 2
            }
        }
        else if (worldTile instanceof Resource || worldTile instanceof Building) {
            this.world.tiles[possLoc.row][possLoc.col].health -= 10
        }
        this.unlock()
        return true
    }

    private gather(loc: ALocation): boolean {
        this.logger.entering("gathering")
        this.lock()
        const gatherer = this.units.tiles[loc.row][loc.col]
        const i = this.playerUnits.units.findIndex(a => a === gatherer)
        const possLoc = this.isGatherableResourceAdjacent(loc)
        if (possLoc.row === -1 || possLoc.col === -1) {
            return false
        }
        const tile = this.world.tiles[possLoc.row][possLoc.col]
        if (gatherer! instanceof Worker || gatherer.wait > 0 || tile! instanceof Resource) {
            this.unlock()
            return false
        }
        if (tile instanceof GasVent) {
            if (gatherer.owner === Constants.prototype.PLAYER_1) {
                this.playerUnits.units.splice(i, 1)
                this.world.tiles[possLoc.row][possLoc.col] = new PGasCollector(possLoc)
                this.playerBuildQ.push(tile)
                this.unlock()
                return true
            }
            else if (gatherer.owner === Constants.prototype.CPU) {
                //  add to gather q
            }
        }
        else if (tile instanceof Minerals) {
            if (gatherer.owner === Constants.prototype.PLAYER_1) {
                this.playerUnits.units[i].wait = 5
                this.playerGatherQ.push(tile)
                this.unlock()
                return true
            }
            else if (gatherer.owner === Constants.prototype.CPU) {
                //  add to gather q
            }
        }
        this.unlock()
        return false
    }

    private create(loc: ALocation, tile: ITile): boolean {
        this.logger.entering("create")
        this.lock()
        const building = this.world.tiles[loc.row][loc.col]
        if (building! instanceof Building || !this.isAffordable(building.owner, tile) || building.wait > 0) {
            this.unlock()
            return false
        }
        const possLoc = this.isOpenAdjacentSpace(building.loc)
        if (possLoc.row === -1 || possLoc.col === -1) {
            this.unlock()
            return false
        }
        this.playerData.subResource(tile.minCost, tile.gasCost, tile.nrgCost)
        const i = this.playerBuildings.units.findIndex(a => a === building)
        this.playerBuildings.units[i].wait = 4
        tile.loc = possLoc
        tile.wait = 4
        if (building.owner === Constants.prototype.PLAYER_1) {
            this.playerCreationQ.push(tile)
        }
        else if (building.owner === Constants.prototype.CPU) {
            //enemycreationqueue push tile
        }
        this.unlock()
        return true
    }

    private build(loc: ALocation, tile: ITile): boolean {
        this.logger.entering("build")
        this.lock()
        const builder = this.units.tiles[loc.row][loc.col]
        if (builder! instanceof Builder || !this.isAffordable(builder.owner, tile) || builder.wait > 0) {
            this.unlock()
            return false
        }
        const location = builder.loc
        if (!this.moveDiff(builder.owner, builder.loc, 0, -1)) {
            if (!this.moveDiff(builder.owner, builder.loc, 1, 0)) {
                if (!this.moveDiff(builder.owner, builder.loc, 0, 1)) {
                    if (!this.moveDiff(builder.owner, builder.loc, -1, 0)) {
                        this.unlock()
                        return false
                    }
                }
            }
        }
        this.playerData.subResource(tile.minCost, tile.gasCost, tile.nrgCost)
        const i = this.playerUnits.units.findIndex(a => a === builder)
        this.playerUnits.units[i].wait = 8
        tile.loc = location
        tile.wait = 8
        if (builder.owner === Constants.prototype.PLAYER_1) {
            this.playerBuildQ.push(tile)
        }
        else if (builder.owner === Constants.prototype.CPU) {
            //enemybuildq.push(tile)
        }
        this.unlock()
        return true
    }





    getUnitList(): PlayerUnits {
        this.logger.entering("getUnitList")
        return this.playerUnits
    }

    getBuildingList(): PlayerBuildings {
        this.logger.entering("getBuildingList")
        return this.playerBuildings
    }

    getBuffer(): AMap {
        this.logger.entering("getBuffer")
        this.updateUnits()
        this.updateCombined()
        this.updateBuffer()
        return this.buffer
    }

    getSize(): number {
        this.logger.entering("getSize")
        return this.size
    }




    processPlayerWaits() {
        this.logger.entering("processPlayerWaits")
        this.lock()
        for (let i = 0; i < this.playerUnits.units.length; ++i) {
            if (this.playerUnits.units[i].wait > 0) {
                this.playerUnits.units[i].wait -= 1
            }
        }
        for (let i = 0; i < this.playerBuildings.units.length; ++i) {
            if (this.playerBuildings.units[i].wait > 0) {
                this.playerBuildings.units[i].wait -= 1
            }
        }
        this.unlock()
    }

    processEnemyMoves() {
        this.logger.entering("processEnemyMoves")
        this.lock()
        const newList = new Array<Move>()
        for (let i = 0; i < this.enemyMovesQ.length; ++i) {
            this.move(this.enemyMovesQ[i])
            newList.push(this.enemyMovesQ[i])
        }
        for (let i = 0; i < newList.length; ++i) {
            const j = this.enemyMovesQ.findIndex(a => a === newList[i])
            this.enemyMovesQ.splice(j, 1)
        }
        this.unlock()
    }

    processPlayerMoves() {
        this.logger.entering("processPlayerMoves")
        this.lock()
        const newList = new Array<Move>()
        for (let i = 0; i < this.playerMovesQ.length; ++i) {
            const tile = this.getUnitAt(this.playerMovesQ[i].from)
            if (tile.wait === 0) {
                this.move(this.playerMovesQ[i])
                newList.push(this.playerMovesQ[i])
            }
        }
        for (let i = 0; i < newList.length; ++i) {
            const j = this.playerMovesQ.findIndex(a => a === newList[i])
            this.playerMovesQ.splice(j, 1)
        }
        this.unlock()
    }

    processPlayerBuildQueue() {
        this.logger.entering("processPlayerBuildQueue")
        this.lock()
        const newList = new Array<ITile>()
        for (let i = 0; i < this.playerBuildQ.length; ++i) {
            const a = this.playerBuildQ[i]
            if (this.world.tiles[a.loc.row][a.loc.col].abort) {
                this.world.tiles[a.loc.row][a.loc.col].abort = false
                this.playerData.addResource(a.minCost, a.gasCost, a.nrgCost)
                newList.push(a)
            }
            else if (a.wait > 0) {
                a.wait -= 1
            }
            else {
                this.playerBuildings.units.push(a)
                newList.push(a)
            }
        }
        for (let i = 0; i < newList.length; ++i) {
            const j = this.playerBuildQ.findIndex(a => a === newList[i])
            this.playerBuildQ.splice(j, 1)
        }
        this.unlock()
    }

    processPlayerCreationQueue() {
        this.logger.entering("processPlayerCreationQueue")
        this.lock()
        const newList = new Array<ITile>()
        for (let i = 0; i < this.playerCreationQ.length; ++i) {
            const a = this.playerCreationQ[i]
            if (this.world.tiles[a.loc.row][a.loc.col].abort) {
                this.world.tiles[a.loc.row][a.loc.col].abort = false
                this.playerData.addResource(a.minCost, a.gasCost, a.nrgCost)
                newList.push(a)
            }
            else if (a.wait > 0) {
                a.wait -= 1
            }
            else {
                this.playerBuildings.units.push(a)
                newList.push(a)
            }
        }
        for (let i = 0; i < newList.length; ++i) {
            const j = this.playerCreationQ.findIndex(a => a === newList[i])
            this.playerCreationQ.splice(j, 1)
        }
        this.unlock()
    }

    processPlayerGatherQueue() {
        this.logger.entering("processPlayerGatherQueue")
        this.lock()
        const newList = new Array<ITile>()
        for (let i = 0; i < this.playerGatherQ.length; ++i) {
            const a = this.playerGatherQ[i]
            if (this.world.tiles[a.loc.row][a.loc.col].abort) {
                this.world.tiles[a.loc.row][a.loc.col].abort = false
                this.playerData.addResource(a.minCost, a.gasCost, a.nrgCost)
                newList.push(a)
            }
            else if (a.health <= 0) {
                newList.push(a)
                this.world.tiles[a.loc.row][a.loc.col] = new GrassTile(a.loc)
            }
            else {
                a.health -= 10
                this.playerData.addResource(a.minSal, a.gasSal, a.nrgSal)
            }
        }
        for (let i = 0; i < newList.length; ++i) {
            const j = this.playerGatherQ.findIndex(a => a === newList[i])
            this.playerGatherQ.splice(j, 1)
        }
        this.unlock()
    }

    processDeadUnits() {
        this.logger.entering("processDeadUnits")
        this.lock()
        const newList = new Array<ITile>()
        for (let i = 0; i < this.playerUnits.units.length; ++i) {
            const a = this.playerUnits.units[i]
            if (a.health <= 0) {
                newList.push(a)
            }
        }
        for (let i = 0; i < newList.length; ++i) {
            const j = this.playerUnits.units.findIndex(a => a === newList[i])
            this.playerUnits.units.splice(j, 1)
        }
        newList.splice(0, newList.length)
        for (let i = 0; i < this.enemyUnits.length; ++i) {
            const a = this.enemyUnits[i]
            if (a.health <= 0) {
                newList.push(a)
            }
        }
        for (let i = 0; i < newList.length; ++i) {
            const j = this.enemyUnits.findIndex(a => a === newList[i])
            this.enemyUnits.splice(j, 1)
        }
        this.unlock()
    }

    processDeadBuildings() {
        this.logger.entering("processDeadBuildings")
        this.lock()
        const newList = new Array<ITile>()
        for (let i = 0; i < this.playerBuildings.units.length; ++i) {
            const a = this.playerBuildings.units[i]
            if (a.health <= 0) {
                if (a instanceof Building) {
                    this.world.tiles[a.loc.row][a.loc.col].abort = true
                }
                newList.push(a)
            }
        }
        for (let i = 0; i < newList.length; ++i) {
            const b = newList[i]
            const j = this.playerBuildings.units.findIndex(a => a === b)
            this.playerBuildings.units.splice(j, 1)
            if (b instanceof GasCollector) {
                this.world.tiles[b.loc.row][b.loc.col] = new GasVent(b.loc)
            }
            else if (b instanceof HQ) {
                this.gameWon = 2
                this.world.tiles[b.loc.row][b.loc.col] = new GrassTile(b.loc)
            }
            else {
                this.world.tiles[b.loc.row][b.loc.col] = new GrassTile(b.loc)
            }
        }
        newList.splice(0, newList.length)
        this.unlock()
        //  add code for enemy buildings
    }




    isValidMove(move: Move): boolean {
        this.logger.entering("isValidMove")
        if (!this.isOnBoard(move.to)) {
            return false
        }
        const from = this.getUnitAt(move.from)
        const to = this.getUnitAt(move.to)
        const toWorld = this.getWorldAt(move.to)
        if (from.blank) {
            return false
        }
        if (from.wait > 0 || !from.occ || !from.drive || to.occ || !to.traverse || toWorld.occ || !toWorld.traverse) {
            return false
        }
        if (to.blank) {
            return true
        }
        return true
    }

    updateUnits() {
        this.logger.entering("updateUnits")
        this.lock()
        for (let i = 0; i < this.size; ++i) {
            for (let j = 0; j < this.size; ++j) {
                const loc = new ALocation(i, j)
                this.units.tiles[i][j] = new BlankTile(loc)
            }
        }
        for (let i = 0; i < this.playerUnits.units.length; ++i) {
            const a = this.playerUnits.units[i]
            this.units.tiles[a.loc.row][a.loc.col] = a
        }
        for (let i = 0; i < this.playerBuildings.units.length; ++i) {
            const a = this.playerBuildings.units[i]
            this.world.tiles[a.loc.row][a.loc.col] = a
        }
        for (let i = 0; i < this.enemyUnits.length; ++i) {
            const a = this.enemyUnits[i]
            this.units.tiles[a.loc.row][a.loc.col] = a
        }
        this.unlock()
    }

    updateCombined() {
        this.logger.entering("updateCombined")
        this.lock()
        for (let i = 0; i < this.size; ++i) {
            for (let j = 0; j < this.size; ++j) {
                this.combined.tiles[i][j] = this.world.tiles[i][j]
            }
        }
        for (let i = 0; i < this.size; ++i) {
            for (let j = 0; j < this.size; ++j) {
                if (!this.units.tiles[i][j].blank) {
                    this.combined.tiles[i][j] = this.units.tiles[i][j]
                }
            }
        }
        this.unlock()
    }

    updateBuffer() {
        this.logger.entering("updateBuffer")
        this.lock()
        let y = 0
        const iStart = this.viewscreen.row - divide(this.height, 2)
        const iEnd = this.height + this.viewscreen.row - divide(this.height, 2)
        const jStart = this.viewscreen.col - divide(this.height, 2)
        const jEnd = this.height + this.viewscreen.col - divide(this.height, 2)
        for (let i = iStart; i < iEnd; ++i) {
            let x = 0
            for (let j = jStart; j < jEnd; ++j) {
                this.buffer.tiles[y][x] = this.combined.tiles[i][j]
                x += 1
            }
            y += 1
        }
        this.unlock()
    }

    getTileAt(loc: ALocation): ITile {
        this.logger.entering("getTileAt")
        return this.buffer.tiles[loc.row][loc.col];
    }

    getResources(): Array<number> {
        this.logger.entering("getResources")
        return this.playerData.getResources()
    }

    getLocationAt(selRow: number, selCol: number): ALocation {
        this.logger.entering("getLocationAt")
        return this.buffer.tiles[selRow][selCol].loc
    }

    getCommandsAt(loc: ALocation) : Array<string> {
        this.logger.entering("getCommandsAt")
        return this.buffer.tiles[loc.row][loc.col].commands
    }

    getStatusAt(loc: ALocation) : Array<string> {
        this.logger.entering("getStatusAt")
        const health =  this.buffer.tiles[loc.row][loc.col].health
        const status = new Array<string>()
        status.push(health.toString())
        return status
    }

    getPNG(loc: ALocation) : string {
        this.logger.entering("getPNG")
        return this.buffer.tiles[loc.row][loc.col].icon
    }

    jumpTo(loc: ALocation) : ALocation {
        this.logger.entering("jumpTo")
        let row = 5
        let col = 5
        if (!this.updateView(loc)) {
            row = row - this.viewscreen.row + divide(this.height, 2)
            col = col - this.viewscreen.col + divide(this.width, 2)
        }
        return new ALocation(row, col)
    }



    issueCommandsAt(loc: ALocation, command: number): boolean {
        this.logger.entering("issueCommandsAt")
        const tile = this.buffer.tiles[loc.row][loc.col]
        const location = tile.loc
        if (tile instanceof PBuilder) {
            switch (command) {
                case 0: {
                    return this.buildPFactory(location)
                }
                case 1: {
                    return this.abort(location)
                }
            }
        }
        else if (tile instanceof PFactory) {
            switch (command) {
                case 0: {
                    return this.createPBuilder(location)
                }
                case 1: {
                    return this.createPWorker(location)
                }
                case 2: {
                    return this.abort(location)
                }
            }
        }
        else if (tile instanceof PWorker) {
            switch (command) {
                case 0: {
                    return this.gather(location)
                }
                case 1: {
                    return this.abort(location)
                }
            }
        }
        else if (tile instanceof PSoldier) {
            switch (command) {
                case 0: {
                    return this.attack(location)
                }
            }
        }
        return false
    }



    getUnitAt(loc: ALocation): ITile {
        this.logger.entering("getUnitAt")
        return this.units.tiles[loc.row][loc.col]
    }

    getWorldAt(loc: ALocation): ITile {
        this.logger.entering("getWorldAt")
        return this.world.tiles[loc.row][loc.col]
    }

    isOnBoard(loc: ALocation): boolean {
        this.logger.entering("isOnBoard")
        if (loc.row >= this.size || loc.row < 0 || loc.col >= this.size || loc.col < 0) {
            return false
        }
        return true
    }

    isOpenAdjacentSpace(loc: ALocation): ALocation {
        this.logger.entering("isOpenAdjacentSpace")
        const left = new ALocation(loc.row, loc.col - 1)
        const right = new ALocation(loc.row, loc.col + 1)
        const down = new ALocation(loc.row + 1, loc.col)
        const up = new ALocation(loc.row - 1, loc.col)
        const aList = new Array<ALocation>(up, down, left, right)
        for (let i = 0; i < aList.length; ++i) {
            const a = aList[i]
            if (this.isOnBoard(a) && !this.units.tiles[a.row][a.col].occ && this.world.tiles[a.row][a.col].occ) {
                return a
            }
        }
        const nullLoc = new ALocation(-1, -1)
        return nullLoc
    }

    isGatherableResourceAdjacent(loc: ALocation): ALocation {
        this.logger.entering("isGatherableResourceAdjacent")
        const left = new ALocation(loc.row, loc.col - 1)
        const right = new ALocation(loc.row, loc.col + 1)
        const down = new ALocation(loc.row + 1, loc.col)
        const up = new ALocation(loc.row - 1, loc.col)
        const aList = new Array<ALocation>(up, down, left, right)
        for (let i = 0; i < aList.length; ++i) {
            const a = aList[i]
            if (this.isOnBoard(a) && this.world.tiles[a.row][a.col].health > 0) {
                return a
            }
        }
        const nullLoc = new ALocation(-1, -1)
        return nullLoc
    }

    isAttackableTileAdjacent(loc: ALocation): ALocation {
        this.logger.entering("isAttackableTileAdjacent")
        const left = new ALocation(loc.row, loc.col - 1)
        const right = new ALocation(loc.row, loc.col + 1)
        const down = new ALocation(loc.row + 1, loc.col)
        const up = new ALocation(loc.row - 1, loc.col)
        const aList = new Array<ALocation>(up, down, left, right)
        const remList = new Array<ALocation>()
        for (let i = 0; i < aList.length; ++i) {
            const a = aList[i]
            if (!this.isOnBoard(a)) {
                remList.push(a)
            }
        }
        for (let i = 0; i < remList.length; ++i) {
            const n = aList.findIndex(a => a === remList[i])
            aList.splice(n, 1)
        }
        for (let i = 0; i < aList.length; ++i) {
            const a = aList[i]
            const worldTile = this.world.tiles[a.row][a.col]
            const unitTile = this.units.tiles[a.row][a.col]
            if (this.isOnBoard(a) && (worldTile.health > 0 || unitTile.health > 0)) {
                return a
            }
        }
        const nullLoc = new ALocation(-1, -1)
        return nullLoc
    }

    isAffordable(buyer: number, tile: ITile): boolean {
        this.logger.entering("isAffordable")
        let data = new GameData(-1)
        if (buyer === Constants.prototype.PLAYER_1) {
            data = this.playerData
        }
        else if (buyer === Constants.prototype.CPU) {
            //data = enemyData
        }
        if (tile.minCost > data.minerals || tile.gasCost > data.gas || tile.nrgCost > data.nrg) {
            return false
        }
        return true
    }


}