

abstract class NRGPlant() : Building() {
    override var minCost = 200
    override var gasCost = 100
    override var nrgSal = 5
    override var nrgCost = 0
    override var commands = mutableListOf<String>("Abort")
    override var health = 100
}