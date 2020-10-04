

class Minerals(location: Location) : Resource() {
    override var loc = location
    override var icon = "M"
    override var health = 50
    override var minSal = 10
    override var gasSal = 0
    override var nrgSal = 0
}