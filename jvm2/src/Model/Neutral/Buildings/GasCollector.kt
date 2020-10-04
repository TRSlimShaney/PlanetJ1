package Model.Neutral.Buildings

abstract class GasCollector() : Building() {
    override var minCost = 0
    override var gasCost = 0
    override var nrgCost = 0
    override var commands = mutableListOf<String>("Abort")
    override var health = 100
}