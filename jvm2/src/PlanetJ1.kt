import Model.*
import py4j.GatewayServer
import kotlin.concurrent.thread

/* This is the controller class.
*  High-level logic for the game takes place here */
class PlanetJ1(private val height: Int, private val width: Int, private val size: Int, private val diff: Int) {
    /* the session data */
    private val model = Model(width, height, diff)
    private var enemyTurn = false
    /* 0 for game not won yet, 1 for player won, 2 for player lost */
    private var gameWon = 0
    private val time: Long = 1000

    init {
        thread(start = true, isDaemon = true, block = {mainLogic()})
        thread(start = true, isDaemon = true, block = {backgroundLogic()})
        //thread(start = true, isDaemon = true, block = {enemyTurnTimer()})
    }


    fun getTheModel() : Model {
        return model
    }

    private fun mainLogic() {
        while (gameWon == 0) {
            Thread.sleep(50)
            model.processPlayerMoves()
            if (enemyTurn) {
                model.processEnemyMoves()
                enemyTurn = false
            }
        }
        if (gameWon == 1) {
            println("You won!!")
        }
        else if (gameWon == 2) {
            println("You lost, too bad!")
        }
    }

    private fun backgroundLogic() {
        while (true) {
            model.processPlayerWaits()
            model.processPlayerBuildQueue()
            model.processPlayerCreationQueue()
            model.processPlayerGatherQueue()
            model.processDeadUnits()
            model.processDeadBuildings()
            Thread.sleep(950)
        }
    }

    private fun enemyTurnTimer() {
        while (true) {
            enemyTurn = true
            Thread.sleep(time - (diff * (time / 4)))
        }
    }

}

//  main execution
fun main(args: Array<String>) {
    println("PlanetJ1 server by Shane Stacy")
    println("Alpha Version\n\n")
    if (args.size < 4) {
        println("Launch failure:\n")
        println("You need to provide 4 arguments: viewscreen height, viewscreen width, map size, and difficulty.")
        println("Viewscreen height = 2x + 11 (ex: 11, 13, 15, etc)")
        println("Viewscreen width = 2x + 11 (ex: 11, 13, 15, etc)")
        println("Map size = max(viewscreen height, viewscreen width)")
        println("Difficulty = 0 (peaceful) or 1 (easy) 2 (normal) or 3 (hard)")
        return
    }
    println("Initializing game...")
    val controller = PlanetJ1(args[0].toInt(), args[1].toInt(), args[2].toInt(), args[3].toInt())
    println("Starting server...")
    val server = GatewayServer(controller)
    println("Server started!")
    server.start()
}