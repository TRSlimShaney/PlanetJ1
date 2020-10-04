import { ALocation as ALocation } from "../../Utilities"

export class ENRGPlant extends NRGPlant {
    loc : ALocation
    use : boolean
    owner : number
    icon : string
    constructor(location : ALocation) {
        super()
        this.loc = location
        this.use = true
        this.owner = 2
        this.icon = "eP"
    }
}