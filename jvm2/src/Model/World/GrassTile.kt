package Model.World

import Model.Abstract.RealTile
import Model.Location
import Model.Move

class GrassTile(location: Location): RealTile() {
    override var loc = location
    override var occ = false
    override var use = false
    override var drive = false
    override var traverse = true
    override var owner = 0
    override var icon = "G"
    override var minCost = 0
    override var gasCost = 0
    override var nrgCost = 0
    override var health = 0
    override var minSal = 0
    override var gasSal = 0
    override var nrgSal = 0
}