package Model.Neutral.Buildings

import Model.Abstract.RealTile

abstract class Factory() : Building() {
    override var minCost = 200
    override var gasCost = 100
    override var nrgCost = 0
    override var commands = mutableListOf<String>("Create a Builder (50, 20, 0)", "Create a Worker (20, 10, 0)", "Abort")
    override var health = 100
}