

abstract class Soldier() : Unit() {
    override var occ = true
    override var traverse = false
    override var minCost = 20
    override var gasCost = 10
    override var nrgCost = 0
    override var health = 50
    override var commands = mutableListOf<String>("Attack enemy")
}