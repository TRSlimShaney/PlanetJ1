package Model

class GameData(diff : Int) {
    var minerals = 0
    var gas = 0
    var nrg = 0

    init {
        if (diff == -1) {
            minerals = 999999
            gas = 999999
            nrg = 999999
        }
        if (diff == 0) {
            minerals = 200
            gas = 200
            nrg = 200
        }
    }

    fun addResource(minDiff: Int, gasDiff: Int, nrgDiff: Int) {
        minerals += minDiff
        gas += gasDiff
        nrg += nrgDiff
    }

    fun subResource(minDiff: Int, gasDiff: Int, nrgDiff: Int) {
        minerals -= minDiff
        gas -= gasDiff
        nrg -= nrgDiff
    }

    fun getResources() : MutableList<Int> {
        return mutableListOf(minerals, gas, nrg)
    }
}