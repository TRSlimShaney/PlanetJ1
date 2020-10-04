package Model.Map.graMap

import Model.Abstract.ITile
import Model.Location
import Model.World.GasVent
import Model.World.GrassTile
import Model.World.Minerals
import Model.World.Water

class GrassWorld() {
    val size = 31
    private val nullLocation = Location(-1, -1)
    /* the world tiles */
    private val gra = GrassTile(nullLocation)
    private val wat = Water(nullLocation)
    private val min = Minerals(nullLocation)
    private val gas = GasVent(nullLocation)

    val tiles = mutableListOf<MutableList<ITile>>()

    init {
        setupMap()
    }


    fun setupMap() {
        val row01 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row02 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row03 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row04 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row05 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row06 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, min, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row07 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, min, min, min, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row08 = mutableListOf<ITile>(gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row09 = mutableListOf<ITile>(gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row10 = mutableListOf<ITile>(gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row11 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row12 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gas, gra, gra)
        val row13 = mutableListOf<ITile>(gra, gra, gra, gra, gas, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra, gra)
        val row14 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, min, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra)
        val row15 = mutableListOf<ITile>(gra, gra, gas, gra, gra, gra, gra, min, min, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gas, gra, gra, gra)
        val row16 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gas, gra, gra, min, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, min, gra, gra, gra, gra, gra)
        val row17 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, min, min, gra, gra, gra, gra)
        val row18 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, min, gra, gra, gra, gra, gra)
        val row19 = mutableListOf<ITile>(gra, gra, gra, gas, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gas, gra)
        val row20 = mutableListOf<ITile>(gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra)
        val row21 = mutableListOf<ITile>(gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra)
        val row22 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra)
        val row23 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra, gra)
        val row24 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row25 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, min, min, min, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row26 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, min, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row27 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row28 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row29 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row30 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)
        val row31 = mutableListOf<ITile>(gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra)

        tiles.add(row01)
        tiles.add(row02)
        tiles.add(row03)
        tiles.add(row04)
        tiles.add(row05)
        tiles.add(row06)
        tiles.add(row07)
        tiles.add(row08)
        tiles.add(row09)
        tiles.add(row10)
        tiles.add(row11)
        tiles.add(row12)
        tiles.add(row13)
        tiles.add(row14)
        tiles.add(row15)
        tiles.add(row16)
        tiles.add(row17)
        tiles.add(row18)
        tiles.add(row19)
        tiles.add(row20)
        tiles.add(row21)
        tiles.add(row22)
        tiles.add(row23)
        tiles.add(row24)
        tiles.add(row25)
        tiles.add(row26)
        tiles.add(row27)
        tiles.add(row28)
        tiles.add(row29)
        tiles.add(row30)
        tiles.add(row31)

        for (i in 0 until size) {
            for (j in 0 until size) {
                val location = Location(i, j)
                tiles[i][j].loc = location
            }
        }
    }

}