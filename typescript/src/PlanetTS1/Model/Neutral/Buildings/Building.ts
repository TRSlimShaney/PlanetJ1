

abstract class Building extends RealTile {
    occ : boolean
    drive : boolean
    traverse : boolean
    minSal : number
    gasSal : number
    nrgSal : number
    abort : boolean

    constructor() {
        super()
        this.occ = true
        this.drive = false
        this.traverse = false
        this.minSal = 0
        this.gasSal = 0
        this.nrgSal = 0
        this.abort = false
    }
}