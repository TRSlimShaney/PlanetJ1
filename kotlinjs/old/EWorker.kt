

class EWorker(location: Location) : Worker() {
    override var loc = location
    override var use = true
    override var drive = true
    override var owner = 2
    override var icon = "eW"
}