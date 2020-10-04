

abstract class AWorker extends Unit {
    occ : boolean
    traverse : boolean
    minCost : number
    gasCost : number
    nrgCost : number
    health : number
    commands : Array<string>
    abort : boolean

    constructor() {
        super()
        this.occ = true
        this.traverse = false
        this.minCost = 20
        this.gasCost = 10
        this.nrgCost = 0
        this.health = 20
        this.commands = new Array<string>("Gather resources", "Abort")
        this.abort = false
    }
}