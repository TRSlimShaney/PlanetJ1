

abstract class Factory extends Building {
    minCost : number
    gasCost : number
    nrgCost : number
    commands : Array<string>
    health : number

    constructor() {
        super()
        this.minCost = 200
        this.gasCost = 100
        this.nrgCost = 0
        this.commands = new Array<string>()
        this.health= 100
    }
}