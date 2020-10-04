

abstract class Builder() : Unit() {
    override var occ = true
    override var traverse = false
    override var minCost = 50
    override var gasCost = 20
    override var nrgCost = 0
    override var commands = mutableListOf<String>("Build a Factory (200, 100, 0)", "Abort")
    override var health = 20
    override var minSal = 0
    override var gasSal = 0
    override var nrgSal = 0
}