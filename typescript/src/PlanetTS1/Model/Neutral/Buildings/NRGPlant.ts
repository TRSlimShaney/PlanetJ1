

abstract class NRGPlant extends Building {
    minCost : number
    gasCost : number
    nrgSal : number
    nrgCost : number
    commands : Array<string>
    health : number

    constructor() {
        super()
        this.minCost = 200
        this.gasCost = 100
        this.nrgSal = 5
        this.nrgCost = 0
        this.commands = new Array<string>("Abort")
        this.health = 100
    }
}