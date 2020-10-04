import { ALocation as ALocation } from "../../Utilities"

export class EWorker extends AWorker {
    loc : ALocation
    use : boolean
    drive : boolean
    owner : number
    icon : string
    constructor(location : ALocation) {
        super()
        this.loc = location
        this.use = true
        this.drive = true
        this.owner = 2
        this.icon = "eW"
    }
}