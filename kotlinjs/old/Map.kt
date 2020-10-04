


//  because Kotlin is...silly,
//  we need to use mutable lists to get dynamic-sized maps
class Map(val size: Int) {
    val tiles = mutableListOf<MutableList<ITile>>()

    init {
        clearMap()
    }

    fun clearMap() {
        for (i in 0 until size) {
            val row = mutableListOf<ITile>()
            for (j in 0 until size) {
                val location = Location(i, j)
                val blank = BlankTile(location)
                row.add(blank)
            }
            tiles.add(row)
        }
    }
}