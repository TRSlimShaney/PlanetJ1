package Model.Player.Buildings

import Model.Location
import Model.Neutral.Buildings.GasCollector

class PGasCollector(location: Location) : GasCollector() {
    override var loc = location
    override var use = true
    override var owner = 1
    override var icon = "pGC"
}