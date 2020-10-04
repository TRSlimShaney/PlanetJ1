

abstract class Unit extends RealTile {
    occ : boolean
    traverse : boolean
    health : number
    minSal : number
    gasSal : number
    nrgSal : number
    abort : boolean

    constructor() {
        super()
        this.occ = true
        this.traverse = false
        this.health = 10
        this.minSal = 0
        this.gasSal = 0
        this.nrgSal = 0
        this.abort = false
    }
}