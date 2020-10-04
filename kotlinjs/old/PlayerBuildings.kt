

class PlayerBuildings() {
    val units = mutableListOf<ITile>()
    private var counter = 0


    fun getNextFactory() : MutableList<Int> {
        if (units.size == 0) {
            return mutableListOf<Int>(-1, -1)
        }
        else if (units.size == 1 && units[0] is PFactory) {
            return mutableListOf<Int>(units[0].loc.row, units[0].loc.col)
        }
        val stop  = units.size
        for (i in 0 until stop) {
            counter += 1
            if (counter == units.size) {
                counter = 0
            }
            if (units[counter] is PFactory) {
                return mutableListOf<Int>(units[counter].loc.row, units[counter].loc.col)
            }
        }
        return mutableListOf<Int>(-1, -1)
    }
}