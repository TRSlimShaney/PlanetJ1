package Model.Enemy.Buildings

import Model.Location
import Model.Neutral.Buildings.Factory

class EFactory(location: Location) : Factory() {
    override var loc = location
    override var use = true
    override var owner = 2
    override var icon = "eF"
}