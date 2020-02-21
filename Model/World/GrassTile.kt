package Model.World

import Model.Abstract.Tile
import Model.Location
import Model.Map
import Model.Move

class GrassTile(loc: Location, occupied: Boolean): Tile() {
    override var loc = loc
    override var occ = occupied
    override var use = false
    override var drive = false
    override var traverse = true
    override var owner = 0

    override fun isValidMove(move: Move, map: Map): Boolean {
        return false
    }
}