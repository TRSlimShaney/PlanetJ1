package Model.Player

import Model.Location
import Model.Move
import Model.Map
import Model.Neutral.Builder

class PBuilder(location: Location) : Builder() {
    override var loc = location
    override var use = true
    override var drive = true
    override var owner = 1

    override fun isValidMove(move: Move, map: Map) : Boolean {
        return true
    }
}