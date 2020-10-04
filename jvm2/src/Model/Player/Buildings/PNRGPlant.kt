package Model.Player.Buildings

import Model.Location
import Model.Neutral.Buildings.NRGPlant

class PNRGPlant(location: Location) : NRGPlant() {
    override var loc = location
    override var use = true
    override var owner = 1
    override var icon = "pP"
}