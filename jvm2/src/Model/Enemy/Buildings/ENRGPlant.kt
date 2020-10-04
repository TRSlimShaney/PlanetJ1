package Model.Enemy.Buildings

import Model.Location
import Model.Neutral.Buildings.NRGPlant

class ENRGPlant(location: Location) : NRGPlant() {
    override var loc = location
    override var use = true
    override var owner = 2
    override var icon = "eP"
}