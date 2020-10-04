import { ALocation as ALocation } from "../../Utilities"
import { EHQ  as EHQ } from "../../Enemy/Buildings/EHQ"
import { EBuilder as EBuilder } from "../../Enemy/Units/EBuilder"
import { EWorker as EWorker } from "../../Enemy/Units/EWorker"
import { ESoldier as ESoldier } from "../../Enemy/Units/ESoldier"
import { BlankTile as BlankTile } from "../../Abstract/BlankTile"
import { ITile as ITile } from "../../Abstract/ITile"
import { PHQ as PHQ } from "../../Player/Buildings/PHQ"
import { PBuilder as PBuilder } from "../../Player/Units/PBuilder"
import { PWorker as PWorker } from "../../Player/Units/PWorker"
import { PSoldier as PSoldier } from "../../Player/Units/PSoldier"

export class GrassUnits {
    size : number
    private nullLoc : ALocation
    private pHQ : PHQ
    private pBu : PBuilder
    private pWo : PWorker
    private pSo : PSoldier
    private eHQ : EHQ
    private eBu : EBuilder
    private eWo : EWorker
    private eSo : ESoldier
    private bla : BlankTile
    tiles : Array<Array<ITile>>
    
    constructor() {
        this.size = 31
        this.nullLoc = new ALocation(-1, -1)
        this.pHQ = new PHQ(this.nullLoc)
        this.pBu = new PBuilder(this.nullLoc)
        this.pWo = new PWorker(this.nullLoc)
        this.pSo = new PSoldier(this.nullLoc)
        this.eHQ = new EHQ(this.nullLoc)
        this.eBu = new EBuilder(this.nullLoc)
        this.eWo = new EWorker(this.nullLoc)
        this.eSo = new ESoldier(this.nullLoc)
        this.bla = new BlankTile(this.nullLoc)
        this.tiles = new Array<Array<ITile>>()
        this.setupMap
    }

    private setupMap() {
        const row01 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row02 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row03 = new Array<ITile>(this.bla, this.bla, this.pHQ, this.bla, this.pWo, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row04 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row05 = new Array<ITile>(this.bla, this.bla, this.pBu, this.bla, this.pSo, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row06 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row07 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row08 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row09 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row10 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row11 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row12 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row13 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row14 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row15 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row16 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row17 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row18 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row19 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row20 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row21 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row22 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row23 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row24 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row25 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row26 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row27 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.eSo, this.bla, this.eBu, this.bla, this.bla)
        const row28 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row29 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.eWo, this.bla, this.eHQ, this.bla, this.bla)
        const row30 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)
        const row31 = new Array<ITile>(this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla, this.bla)

        this.tiles.push(row01)
        this.tiles.push(row02)
        this.tiles.push(row03)
        this.tiles.push(row04)
        this.tiles.push(row05)
        this.tiles.push(row06)
        this.tiles.push(row07)
        this.tiles.push(row08)
        this.tiles.push(row09)
        this.tiles.push(row10)
        this.tiles.push(row11)
        this.tiles.push(row12)
        this.tiles.push(row13)
        this.tiles.push(row14)
        this.tiles.push(row15)
        this.tiles.push(row16)
        this.tiles.push(row17)
        this.tiles.push(row18)
        this.tiles.push(row19)
        this.tiles.push(row20)
        this.tiles.push(row21)
        this.tiles.push(row22)
        this.tiles.push(row23)
        this.tiles.push(row24)
        this.tiles.push(row25)
        this.tiles.push(row26)
        this.tiles.push(row27)
        this.tiles.push(row28)
        this.tiles.push(row29)
        this.tiles.push(row30)
        this.tiles.push(row31)

        for (let i = 0; i < this.size; ++i) {
            for (let j = 0; j < this.size; ++j) {
                this.tiles[i][j].loc = new ALocation(i, j)
            }
        }
    }
}