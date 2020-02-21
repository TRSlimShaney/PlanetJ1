import Model.Abstract.ITile
import Model.GameData
import Model.Model
import Model.Map
import Model.Move
import py4j.GatewayServer

/* Controller class, attempting to conform to MVC protocol */
class Controller(height: Int, width: Int) {
    var model = Model(height, width)

    fun main() {
        val controller = Controller(11, 11)
        val server = GatewayServer(controller)
        server.start()
    }

    fun restartGame(height: Int, width: Int) {
        model = Model(height, width)
    }

    fun move(fromTile: ITile, toTile: ITile) : Boolean {
        val move = Move(fromTile.loc, toTile.loc)
        if (!model.isValidMove(move, fromTile, toTile)) {
            return false
        }
        model.move(move)
        return true
    }

    fun getBuffer() : Map {
        return model.getBuffer()
    }

    fun getData() : GameData {
        return model.getData()
    }
}