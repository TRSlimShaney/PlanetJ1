package Model.Player.Units

import Model.Location
import Model.Move
import Model.Neutral.Units.Builder

class PBuilder(location: Location) : Builder() {
    override var loc = location
    override var use = true
    override var drive = true
    override var owner = 1
    override var icon = "pB"
}