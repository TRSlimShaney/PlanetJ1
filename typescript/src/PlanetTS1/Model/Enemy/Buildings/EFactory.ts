import { ALocation as ALocation } from "../../Utilities"

export class EFactory extends Factory {
    loc : ALocation
    use : true
    owner : number
    icon : string
    constructor(location : ALocation) {
        super()
        this.loc = location
        this.use = true
        this.owner = 2
        this.icon = "eF"
    }
}