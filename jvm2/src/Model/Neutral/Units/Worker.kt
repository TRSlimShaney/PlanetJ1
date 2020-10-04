package Model.Neutral.Units

import Model.Abstract.Unit

abstract class Worker() : Unit() {
    override var occ = true
    override var traverse = false
    override var minCost = 20
    override var gasCost = 10
    override var nrgCost = 0
    override var health = 20
    override var commands = mutableListOf<String>("Gather resources", "Abort")
}