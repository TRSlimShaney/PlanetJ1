

class ESoldier(location: Location) : Soldier() {
    override var loc = location
    override var use = true
    override var drive = true
    override var owner = 2
    override var icon = "eS"
}