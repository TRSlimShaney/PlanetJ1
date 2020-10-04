package Model.Player.Buildings

import Model.Location
import Model.Neutral.Buildings.Factory

class PFactory(location: Location) : Factory() {
    override var loc = location
    override var use = true
    override var owner = 1
    override var icon = "pF"
}