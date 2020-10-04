package Model.Enemy.Buildings

import Model.Location
import Model.Neutral.Buildings.HQ

class EHQ(location: Location) : HQ() {
    override var loc = location
    override var use = true
    override var owner = 2
    override var icon = "eHQ"
}