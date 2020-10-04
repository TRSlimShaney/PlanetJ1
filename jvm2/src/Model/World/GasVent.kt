package Model.World

import Model.Abstract.Resource
import Model.Location

class GasVent(location: Location) : Resource() {
    override var loc = location
    override var icon = "GV"
    override var health = 1000000
    override var minSal = 0
    override var gasSal = 1
    override var nrgSal = 0
}