package Model.Neutral.Buildings

import Model.Abstract.RealTile

abstract class Building() : RealTile() {
    override var occ = true
    override var drive = false
    override var traverse = false
    override var minSal = 0
    override var gasSal = 0
    override var nrgSal = 0
}