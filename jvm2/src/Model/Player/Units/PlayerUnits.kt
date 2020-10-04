package Model.Player.Units

import Model.Abstract.ITile

class PlayerUnits() {
    val units = mutableListOf<ITile>()
    private var counter = 0


    fun getNextBuilder() : MutableList<Int> {
        if (units.size == 0) {
            return mutableListOf<Int>(-1, -1)
        }
        else if (units.size == 1 && units[0] is PBuilder) {
            return mutableListOf<Int>(units[0].loc.row, units[0].loc.col)
        }
        val stop  = units.size
        for (i in 0 until stop) {
            counter += 1
            if (counter == units.size) {
                counter = 0
            }
            if (units[counter] is PBuilder) {
                return mutableListOf<Int>(units[counter].loc.row, units[counter].loc.col)
            }
        }
        return mutableListOf<Int>(-1, -1)
    }

    fun getNextWorker() : MutableList<Int> {
        if (units.size == 0) {
            return mutableListOf<Int>(-1, -1)
        }
        else if (units.size == 1 && units[0] is PWorker) {
            return mutableListOf<Int>(units[0].loc.row, units[0].loc.col)
        }
        val stop  = units.size
        for (i in 0 until stop) {
            counter += 1
            if (counter == units.size) {
                counter = 0
            }
            if (units[counter] is PWorker) {
                return mutableListOf<Int>(units[counter].loc.row, units[counter].loc.col)
            }
        }
        return mutableListOf<Int>(-1, -1)
    }

    fun getNextSoldier() : MutableList<Int> {
        if (units.size == 0) {
            return mutableListOf<Int>(-1, -1)
        }
        else if (units.size == 1 && units[0] is PSoldier) {
            return mutableListOf<Int>(units[0].loc.row, units[0].loc.col)
        }
        val stop  = units.size
        for (i in 0 until stop) {
            counter += 1
            if (counter == units.size) {
                counter = 0
            }
            if (units[counter] is PSoldier) {
                return mutableListOf<Int>(units[counter].loc.row, units[counter].loc.col)
            }
        }
        return mutableListOf<Int>(-1, -1)
    }
}