package Model.Map.blassMap

import Model.Abstract.BlankTile
import Model.Abstract.ITile
import Model.Enemy.Buildings.EHQ
import Model.Enemy.Units.EBuilder
import Model.Enemy.Units.ESoldier
import Model.Enemy.Units.EWorker
import Model.Location
import Model.Player.Buildings.PHQ
import Model.Player.Units.PBuilder
import Model.Player.Units.PSoldier
import Model.Player.Units.PWorker

class GrassUnits() {
    val size = 31
    private val nullLocation = Location(-1, -1)
    private val bla = BlankTile(nullLocation)

    /* the player's tiles */
    private val pHQ = PHQ(nullLocation)
    private val pBu = PBuilder(nullLocation)
    private val pWo = PWorker(nullLocation)
    private val pSo = PSoldier(nullLocation)
    /* the enemy's tiles */
    private val eHQ = EHQ(nullLocation)
    private val eBu = EBuilder(nullLocation)
    private val eWo = EWorker(nullLocation)
    private val eSo = ESoldier(nullLocation)

    val tiles = mutableListOf<MutableList<ITile>>()

    init {
        setupMap()
    }


    fun setupMap() {
        val row01 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row02 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row03 = mutableListOf<ITile>(bla, bla, pHQ, bla, pWo, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row04 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row05 = mutableListOf<ITile>(bla, bla, pBu, bla, pSo, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row06 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row07 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row08 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row09 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row10 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row11 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row12 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row13 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row14 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row15 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row16 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row17 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row18 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row19 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row20 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row21 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row22 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row23 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row24 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row25 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row26 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row27 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, eSo, bla, eBu, bla, bla)
        val row28 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row29 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, eWo, bla, eHQ, bla, bla)
        val row30 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)
        val row31 = mutableListOf<ITile>(bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla)

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