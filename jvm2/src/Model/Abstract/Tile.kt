package Model.Abstract

abstract class Tile() : ITile {
    override fun getPNG() : String {
        return icon
    }
    override var abort = false
    override var commands = mutableListOf<String>("No commands available")
}