

abstract class Resource extends RealTile {
    occ : boolean
    use : boolean
    drive : boolean
    traverse : boolean
    owner : number
    minCost : number
    gasCost : number
    nrgCost : number
    abort : boolean
    commands : Array<string>

    constructor() {
        super()
        this.occ = true
        this.use = false
        this.drive = false
        this.traverse = false
        this.owner = 0
        this.minCost = 0
        this.gasCost = 0
        this.nrgCost = 0
        this.abort = false
        this.commands = new Array<string>("")
    }
}