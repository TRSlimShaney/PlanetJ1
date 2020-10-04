package Model.Abstract

import Model.Location
import Model.Move

interface ITile {
    var loc: Location
    var occ: Boolean
    var use: Boolean
    var drive: Boolean
    var traverse: Boolean
    var owner: Int
    var blank: Boolean
    var minCost : Int
    var gasCost : Int
    var nrgCost : Int
    var minSal : Int
    var gasSal : Int
    var nrgSal : Int
    var wait : Int
    var health : Int
    var abort : Boolean
    var commands : MutableList<String>
    var icon: String
    fun getPNG() : String
}