import { ALocation as ALocation } from "../Utilities"

export interface ITile {
    loc : ALocation
    occ : boolean
    use : boolean
    drive : boolean
    traverse : boolean
    owner : number
    blank : boolean
    minCost : number
    gasCost : number
    nrgCost : number
    minSal : number
    gasSal : number
    nrgSal : number
    wait : number
    health : number
    abort : boolean
    commands : Array<string>
    icon : string
}