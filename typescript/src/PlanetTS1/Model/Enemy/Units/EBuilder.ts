import { ALocation as ALocation } from "../../Utilities"

export class EBuilder extends Builder {
    loc : ALocation
    use : boolean
    drive : boolean
    owner : number
    icon : string
    constructor(location : ALocation) {
        super()
        this.loc = location
        this.drive = true
        this.owner = 2
        this.icon = "eB"
    }
}