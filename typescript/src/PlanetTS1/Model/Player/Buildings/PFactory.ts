import { ALocation as ALocation } from "../../Utilities"

export class PFactory extends Factory {
    loc : ALocation
    use : boolean
    owner : number
    icon : string

    constructor(location : ALocation) {
        super()
        this.loc = location
        this.use = true
        this.owner = 1
        this.icon = "pF"
    }
}