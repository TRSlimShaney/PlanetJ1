package Model.Enemy.Units

import Model.Location
import Model.Neutral.Units.Soldier

class ESoldier(location: Location) : Soldier() {
    override var loc = location
    override var use = true
    override var drive = true
    override var owner = 2
    override var icon = "eS"
}