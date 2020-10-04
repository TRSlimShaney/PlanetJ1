import { ALocation as ALocation } from "../../Utilities"

export class EHQ extends HQ {
    loc : ALocation
    use : boolean
    owner : number
    icon : "eHQ"
    constructor(location : ALocation) {
        super()
        this.loc = location
        this.use = true
        this.owner = 2
        this.icon = "eHQ"
    }
}