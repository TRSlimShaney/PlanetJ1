import { ALocation as ALocation } from "../Utilities"

export class Minerals extends Resource {
    loc : ALocation
    icon : string
    health : number
    minSal : number
    gasSal : number
    nrgSal : number

    constructor(loc: ALocation) {
        super()
        this.loc = loc
        this.icon = "M"
        this.health = 50
        this.minSal = 10
        this.gasSal = 0
        this.nrgSal = 0
    }
}