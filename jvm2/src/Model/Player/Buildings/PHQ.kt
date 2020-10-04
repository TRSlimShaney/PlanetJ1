package Model.Player.Buildings

import Model.Location
import Model.Neutral.Buildings.HQ

class PHQ(location: Location) : HQ() {
    override var loc = location
    override var use = true
    override var owner = 1
    override var icon = "pHQ"
}