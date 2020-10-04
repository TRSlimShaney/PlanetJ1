package Model.Enemy.Buildings

import Model.Location
import Model.Neutral.Buildings.GasCollector

class EGasCollector(location: Location) : GasCollector() {
    override var loc = location
    override var use = true
    override var owner = 2
    override var icon = "eGC"
}