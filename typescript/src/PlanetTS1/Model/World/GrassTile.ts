import { ALocation as ALocation } from "../Utilities"

export class GrassTile extends RealTile {
    loc : ALocation
    occ : boolean
    use : boolean
    drive : boolean
    traverse : boolean
    owner : number
    icon : string
    minCost : number
    gasCost : number
    nrgCost : number
    health : number
    minSal : number
    gasSal : number
    nrgSal : number
    abort : boolean
    commands : Array<string>

    constructor(loc: ALocation) {
        super()
        this.loc = loc
        this.occ = false
        this.use = false
        this.drive = false
        this.traverse = true
        this.owner = 0
        this.icon = "G"
        this.minCost = 0
        this.gasCost = 0
        this.nrgCost = 0
        this.health = 0
        this.minSal = 0
        this.gasSal = 0
        this.nrgSal = 0
        this.abort = false
        this.commands = new Array<string>("")
    }
}