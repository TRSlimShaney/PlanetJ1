import { Constants, ALocation, Logger } from "../Model/Utilities"
import { Model } from "../Model/Model"
import { IntegerDivision as divide } from "../Model/Utilities"


//  this class contains logic that the view component will use
//  this keeps the view logic out of the rendering and controller components
export class ViewLogic {
    private selRow: number
    private selCol: number
    private viewRow: number
    private viewCol: number
    private selMode: number
    private map: Array<Array<string>>
    private center: number
    private commandList: Array<string>
    private statusList: Array<string>
    private infoList: Array<string>
    private minLabel: string
    private gasLabel: string
    private nrgLabel: string
    private logger: Logger


    constructor(
        private model: Model,
        private numRows: number,
        private numCols: number,
        private difficulty: number,
        private size: number,
        enableLog: boolean) {

        this.selRow = -1
        this.selCol = -1
        this.viewRow = 5
        this.viewCol = 5
        this.selMode = Constants.prototype.unit_mode

        for (let i = 0; i < numRows; ++i) {
            this.map.push(new Array<string>())
            for (let j = 0; j < numCols; ++j) {
                this.map[i].push("err")
            }
        }

        this.center = divide(size, 2) + 1
        this.commandList = new Array<string>()
        this.statusList = new Array<string>()
        this.infoList = new Array<string>()
        this.minLabel = "0"
        this.gasLabel = "0"
        this.nrgLabel = "0"
        this.logger = new Logger(enableLog, "VIEWLOGIC", "VIEWLOGIC_LOGGER")

        this.handleSelect()

        this.signalStatus("Welcome to PlanetJ1 Alpha Version!")
        setInterval(this.autoPrintBuffer, 50)
        setInterval(this.autoStatus, 1000)
        this.logger.debug("Leaving constructor")
    }



    handleUp() {
        this.logger.entering("handleUp")
        if (this.selMode === Constants.prototype.unit_mode) {
            const from = this.model.getLocationAt(this.selRow, this.selCol)
            if (this.model.moveDiff(Constants.prototype.PLAYER_1, from, -1, 0)) {
                if (from.row >= this.center) {
                    this.selRow -= 1
                }
                else if (!this.model.updateViewDiff(-1, 0)) {
                    this.selRow -= 1
                }
            }
            else {
                this.signalStatus("Invalid move!")
            }
        }
        else {
            this.model.updateViewDiff(-1, 0)
        }
        this.printBuffer()
    }

    handleDown() {
        this.logger.entering("handleDown")
        if (this.selMode === Constants.prototype.unit_mode) {
            const from = this.model.getLocationAt(this.selRow, this.selCol)
            if (this.model.moveDiff(Constants.prototype.PLAYER_1, from, 1, 0)) {
                if (from.row >= this.center) {
                    this.selRow += 1
                }
                else if (!this.model.updateViewDiff(1, 0)) {
                    this.selRow += 1
                }
            }
            else {
                this.signalStatus("Invalid move!")
            }
        }
        else {
            this.model.updateViewDiff(1, 0)
        }
        this.printBuffer()
    }

    handleLeft() {
        this.logger.entering("handleLeft")
        if (this.selMode === Constants.prototype.unit_mode) {
            const from = this.model.getLocationAt(this.selRow, this.selCol)
            if (this.model.moveDiff(Constants.prototype.PLAYER_1, from, 0, -1)) {
                if (from.row >= this.center) {
                    this.selCol -= 1
                }
                else if (!this.model.updateViewDiff(0, -1)) {
                    this.selCol -= 1
                }
            }
            else {
                this.signalStatus("Invalid move!")
            }
        }
        else {
            this.model.updateViewDiff(0, -1)
        }
        this.printBuffer()
    }

    handleRight() {
        this.logger.entering("handleRight")
        if (this.selMode === Constants.prototype.unit_mode) {
            const from = this.model.getLocationAt(this.selRow, this.selCol)
            if (this.model.moveDiff(Constants.prototype.PLAYER_1, from, 0, 1)) {
                if (from.row >= this.center) {
                    this.selCol += 1
                }
                else if (!this.model.updateViewDiff(0, 1)) {
                    this.selCol += 1
                }
            }
            else {
                this.signalStatus("Invalid move!")
            }
        }
        else {
            this.model.updateViewDiff(0, 1)
        }
        this.printBuffer()
    }

    handleViewMode(): number {
        this.logger.entering("handleViewMode")
        if (this.selMode === Constants.prototype.unit_mode) {
            this.selMode = Constants.prototype.view_mode
            this.commandList = new Array<string>()
            return Constants.prototype.unit_mode
        }
        else {
            this.selMode = Constants.prototype.unit_mode
            this.selRow = 5
            this.selCol = 5
            this.handleSelect()
            return Constants.prototype.view_mode
        }
    }

    handleNext(loc: ALocation): boolean {
        this.logger.entering("handleNext")
        let valid = false
        if (loc.row !== -1 && loc.col !== -1) {
            const selCor = this.model.jumpTo(loc)
            this.selRow = selCor.row
            this.selCol = selCor.col
            this.selMode = Constants.prototype.unit_mode
            valid = true
        }
        this.printBuffer()
        this.handleSelect()
        return valid
    }

    handleNextBuilder(): boolean {
        this.logger.entering("handleNextBuilder")
        const to = this.model.getUnitList().getNextBuilder()
        return this.handleNext(to)
    }

    handleNextWorker(): boolean {
        this.logger.entering("handleNextWorker")
        const to = this.model.getUnitList().getNextWorker()
        return this.handleNext(to)
    }

    handleNextSoldier(): boolean {
        this.logger.entering("handleNextSoldier")
        const to = this.model.getUnitList().getNextSoldier()
        return this.handleNext(to)
    }

    handleNextFactory(): boolean {
        this.logger.entering("handleNextFactory")
        const to = this.model.getBuildingList().getNextFactory()
        return this.handleNext(to)
    }



    handleEngage(command: number): boolean {
        this.logger.entering("handleEngage")
        const result = this.model.issueCommandsAt(new ALocation(this.selRow, this.selCol), command)
        if (result) {
            this.signalStatus("Commands issued.")
        }
        else {
            this.signalStatus("Command failed.")
        }
        return result
    }

    handleSelect() {
        this.logger.entering("handleSelect")
        this.commandList = new Array<string>()
        this.statusList = new Array<string>()
        const commands = this.model.getCommandsAt(new ALocation(this.selRow, this.selCol))
        const status = this.model.getStatusAt(new ALocation(this.selRow, this.selCol))
        this.commandList.concat(commands)
        this.statusList.concat(status)
        // threading.Thread(target=self.lookHere, daemon=True).start()
    }

    autoStatus() {
        this.logger.entering("autoStatus")
        this.statusList = new Array<string>()
        const status = this.model.getStatusAt(new ALocation(this.selRow, this.selCol))
        this.statusList.concat(status)
    }

    autoPrintBuffer(model: Model) {
        this.logger.entering("autoPrintBuffer")
        this.printBuffer()
    }

    printBuffer() {
        this.logger.entering("printBuffer")
        this.model.getBuffer()
        const resources = this.model.getResources()
        this.minLabel = resources[0].toString()
        this.gasLabel = resources[1].toString()
        this.nrgLabel = resources[2].toString()
        for (let i = 0; i < this.map.length; ++i) {
            for (let j = 0; j < this.map[i].length; ++j) {
                this.map[i][j] = this.model.getPNG(new ALocation(this.selRow, this.selCol))
            }
        }
    }

    handleExit() {
        this.logger.entering("handleExit")
        this.signalStatus("Exiting...")
    }

    signalStatus(text: string) {
        this.logger.entering("signalStatus")
        this.infoList.push(text)
    }


}