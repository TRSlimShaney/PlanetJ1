

class PSoldier(location: Location) : Soldier() {
    override var loc = location
    override var use = true
    override var drive = true
    override var owner = 1
    override var icon = "pS"
}