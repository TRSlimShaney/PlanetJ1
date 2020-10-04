import { ALocation as ALocation } from "../../Utilities"
import { ITile as ITile } from "../../Abstract/ITile"
import { Water as Water } from "../../World/Water"
import { GrassTile as GrassTile } from "../../World/GrassTile"
import { Minerals as Minerals } from "../../World/Minerals"
import { GasVent as GasVent } from "../../World/GasVent"

export class GrassWorld {
    size : number
    private nullLoc : ALocation
    private gra : GrassTile
    private wat : Water
    private min : Minerals
    private gas : GasVent
    tiles : Array<Array<ITile>>

    constructor() {
        this.size = 31
        this.nullLoc = new ALocation(-1, -1)
        this.gra = new GrassTile(this.nullLoc)
        this.wat = new Water(this.nullLoc)
        this.min = new Minerals(this.nullLoc)
        this.gas = new GasVent(this.nullLoc)
        this.tiles = new Array<Array<ITile>>()
        this.setupMap()
    }

    private setupMap() {
        const row01 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row02 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row03 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row04 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row05 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row06 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.min, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row07 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.min, this.min, this.min, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row08 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row09 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row10 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row11 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row12 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gas, this.gra, this.gra)
        const row13 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gas, this.gra, this.gra, this.gra, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row14 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.min, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row15 = new Array<ITile>(this.gra, this.gra, this.gas, this.gra, this.gra, this.gra, this.gra, this.min, this.min, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.gra, this.gra, this.gas, this.gra, this.gra, this.gra)
        const row16 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gas, this.gra, this.gra, this.min, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.min, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row17 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.min, this.min, this.gra, this.gra, this.gra, this.gra)
        const row18 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.min, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row19 = new Array<ITile>(this.gra, this.gra, this.gra, this.gas, this.gra, this.gra, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.gra, this.gra, this.gra, this.gra, this.gas, this.gra)
        const row20 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row21 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row22 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row23 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row24 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.wat, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row25 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.min, this.min, this.min, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row26 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.min, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row27 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row28 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row29 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row30 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)
        const row31 = new Array<ITile>(this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra, this.gra)

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