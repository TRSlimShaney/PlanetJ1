import { ALocation as ALocation } from "../Utilities"

export class BlankTile {
    loc : ALocation
    occ : boolean
    use : boolean
    drive : boolean
    traverse : boolean
    owner : number
    blank : boolean
    icon : string
    minCost : number
    gasCost : number
    nrgCost : number
    wait : number
    health : number
    minSal : number
    gasSal : number
    nrgSal : number
    abort : false
    commands : Array<string>
    constructor(location : ALocation) {
        this.loc = location
        this.occ = false
        this.use = false
        this.drive = false
        this.traverse = true
        this.owner = 0
        this.blank = true
        this.icon = "?"
        this.minCost = 0
        this.gasCost = 0
        this.nrgCost = 0
        this.wait = 0
        this.health = 0
        this.minSal = 0
        this.gasSal = 0
        this.nrgSal = 0
        this.abort = false
        this.commands = new Array<string>()
    }
}