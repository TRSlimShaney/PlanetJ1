package Model.Abstract

import Model.Location
import Model.Map
import Model.Move

interface ITile {
    var loc: Location
    var occ: Boolean
    var use: Boolean
    var drive: Boolean
    var traverse: Boolean
    var owner: Int

    fun isValidMove(move: Move) : Boolean
}