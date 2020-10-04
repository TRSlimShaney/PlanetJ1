

abstract class Resource() : RealTile() {
    override var occ = true
    override var use = false
    override var drive = false
    override var traverse = false
    override var owner = 0
    override var minCost = 0
    override var gasCost = 0
    override var nrgCost = 0
}