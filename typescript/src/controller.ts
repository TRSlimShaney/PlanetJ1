import * as PlanetTS1 from "./PlanetTS1/Model/Model"
import { PrintLine as println, Logger } from "./PlanetTS1/Model/Utilities"
import { ALocation as ALocation } from "./PlanetTS1/Model/Utilities"
import { View as View } from "./view"
import { Constants as Constants } from "./PlanetTS1/Model/Utilities"
import { ViewLogic } from "./PlanetTS1/View/ViewLogic"

export class Controller {
    private viewLogic: ViewLogic
    private gameWon : number
    private enemyTurn : boolean
    private logger: Logger

    

    constructor(
        private height: number,
        private width: number,
        private size: number,
        private diff: number, 
        private model: PlanetTS1.Model,
        private view: View,
        enableLog: boolean) {

        this.gameWon = 0
        this.enemyTurn = false
        this.viewLogic = new ViewLogic(model, height, width, diff, size, enableLog)
        this.logger = new Logger(enableLog, "CONTROLLER", "CONTROLLER_LOGGER")
        

        println("PlanetJS1 by Shane Stacy")
        println("Alpha Version\n\n")

        println("Starting main logic...")
        setInterval(this.mainLogic, 50)
        println("Starting background logic...")
        setInterval(this.backgroundLogic, 950)
        println("Starting enemy turn timer...")
        setInterval(this.enemyTurnTimer, 950)
        println("Model loaded.")
        this.logger.debug("Leaving constructor")
    }

    private mainLogic() {
        this.logger.entering("mainLogic")
        while (this.gameWon === 0) {
            this.model.processPlayerMoves()
            if (this.enemyTurn) {
                this.model.processEnemyMoves()
                this.enemyTurn = false
            }
        }
        if (this.gameWon === 1) {
            //you won
        }
        else if (this.gameWon === 2) {
            //you lost
        }
    }

    private backgroundLogic() {
        this.logger.entering("backgroundLogic")
        while (this.gameWon === 0) {
            this.model.processPlayerWaits()
            this.model.processPlayerBuildQueue()
            this.model.processPlayerCreationQueue()
            this.model.processPlayerGatherQueue()
            this.model.processDeadUnits()
            this.model.processDeadBuildings()
        }
    }

    private enemyTurnTimer() {
        this.logger.entering("enemyTurnTimer")
        while (this.gameWon === 0) {
            this.enemyTurn = true
        }
    }


    upClicked() {
        this.logger.entering("upClicked")
        this.viewLogic.handleUp()
    }

    downClicked() {
        this.logger.entering("downClicked")
        this.viewLogic.handleDown()
    }

    leftClicked() {
        this.logger.entering("leftClicked")
        this.viewLogic.handleLeft()
    }

    rightClicked() {
        this.logger.entering("rightClicked")
        this.viewLogic.handleRight()
    }

    viewClicked() {
        this.logger.entering("viewClicked")
        this.viewLogic.handleViewMode()
    }

    nextBuilderClicked() {
        this.logger.entering("nextBuilderClicked")
        this.viewLogic.handleNextBuilder()
    }

    nextWorkerClicked() {
        this.logger.entering("nextWorkerClicked")
        this.viewLogic.handleNextWorker()
    }

    nextSoldierClicked() {
        this.logger.entering("nextSoldierClicked")
        this.viewLogic.handleNextSoldier()
    }

    nextFactoryClicked() {
        this.logger.entering("nextFactoryClicked")
        this.viewLogic.handleNextFactory()
    }

    engageClicked(command: number) {
        this.logger.entering("engageClicked")
        this.viewLogic.handleEngage(command)
    }

    selectClicked(loc: Location) {
        this.logger.entering("selectClicked")
        this.viewLogic.handleSelect()
    }
}