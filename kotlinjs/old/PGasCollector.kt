

class PGasCollector(location: Location) : GasCollector() {
    override var loc = location
    override var use = true
    override var owner = 1
    override var icon = "pGC"
}