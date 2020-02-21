package Model.Abstract

import Model.Location

abstract class Unit() : Tile(){
    override var occ = true
    override var traverse = false
}