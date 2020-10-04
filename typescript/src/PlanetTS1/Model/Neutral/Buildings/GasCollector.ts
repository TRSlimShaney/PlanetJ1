

abstract class GasCollector extends Building {
    minCost : number
    gasCost : number
    nrgCost : number
    commands : Array<string>
    health : number

    constructor() {
        super()
        this.minCost = 0
        this.gasCost = 0
        this.nrgCost = 0
        this.commands = new Array<string>("Abort")
        this.health = 100
    }
}