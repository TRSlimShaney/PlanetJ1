import { ALocation as ALocation } from "../Utilities"

export class GasVent extends Resource {
    loc : ALocation
    icon : string
    health : number
    minSal : number
    gasSal : number
    nrgSal : number

    constructor(loc: ALocation) {
        super()
        this.loc = loc
        this.icon = "GV"
        this.health = 1000000
        this.minSal = 0
        this.gasSal = 1
        this.nrgSal = 0
    }
}