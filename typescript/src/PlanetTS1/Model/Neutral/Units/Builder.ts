

abstract class Builder extends Unit {
    occ : boolean
    traverse : boolean
    minCost : number
    gasCost : number
    nrgCost : number
    commands : Array<string>
    health : number
    minSal : number
    gasSal : number
    nrgSal : number
    abort : boolean

    constructor() {
        super()
        this.occ = true
        this.traverse = false
        this.minCost = 50
        this.gasCost = 20
        this.nrgCost = 0
        this.commands = new Array<string>("Build a Factory (200, 100, 0)", "Abort")
        this.health = 20
        this.minSal = 0
        this.gasSal = 0
        this.nrgSal = 0
        this.abort = false
    }
}