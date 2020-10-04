package Model.Enemy.Units

import Model.Location
import Model.Neutral.Units.Builder

class EBuilder(location: Location) : Builder() {
    override var loc = location
    override var use = true
    override var drive = true
    override var owner = 2
    override var icon = "eB"
}