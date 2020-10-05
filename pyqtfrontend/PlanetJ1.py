import os, subprocess, sys, threading
from time import sleep
from PyQt5 import QtWidgets
from PyQt5.QtWidgets import QApplication
import PlanetJ1GUI, AboutPlanetJ1, StartPrompt
from py4j.java_gateway import JavaGateway

gRows = 11
gCols = 11
gSize = 11
gDiff = 0

# this is the main window
class Driver(QtWidgets.QMainWindow, PlanetJ1GUI.Ui_MainWindow):
    def __init__(self, rows, cols, diff, parent=None):
        super(Driver, self).__init__(parent)
        self.setupUi(self)
        # number of rows for the game
        self.rows = rows
        # number of cols for the game
        self.cols = cols
        # game difficulty (0 is peaceful, 1 is easy, 2 is normal, 3 is hard)
        self.diff = diff
        # if the actionExit tab is clicked, handle it
        self.actionExit.triggered.connect(self.handleExit)
        # if the actionAbout tab is clicked, handle it
        self.actionAbout.triggered.connect(self.handleAbout)
        self.upButton.clicked.connect(self.handleUp)
        self.downButton.clicked.connect(self.handleDown)
        self.leftButton.clicked.connect(self.handleLeft)
        self.rightButton.clicked.connect(self.handleRight)
        self.viewMode.clicked.connect(self.handleViewMode)
        self.nextBuilder.clicked.connect(self.handleNextBuilder)
        self.nextWorker.clicked.connect(self.handleNextWorker)
        self.nextSoldier.clicked.connect(self.handleNextSoldier)
        self.nextFactory.clicked.connect(self.handleNextFactory)
        self.doButton.clicked.connect(self.handleEngage)
        # connect to the JVM
        self.gateway = JavaGateway()
        # get the entry point
        self.game = self.gateway.entry_point.getTheModel()
        self.selectedRow = 5
        self.selectedCol = 5
        self.viewRow = self.game.getViewScreen()[0]
        self.viewCol = self.game.getViewScreen()[1]
        self.viewModeBool = False
        self.sizeGame = self.game.getSize()
        self.map = []
        row0List = []
        row0List.append(self.r0c0)
        row0List.append(self.r0c1)
        row0List.append(self.r0c2)
        row0List.append(self.r0c3)
        row0List.append(self.r0c4)
        row0List.append(self.r0c5)
        row0List.append(self.r0c6)
        row0List.append(self.r0c7)
        row0List.append(self.r0c8)
        row0List.append(self.r0c9)
        row0List.append(self.r0c10)
        self.map.append(row0List)
        row1List = []
        row1List.append(self.r1c0)
        row1List.append(self.r1c1)
        row1List.append(self.r1c2)
        row1List.append(self.r1c3)
        row1List.append(self.r1c4)
        row1List.append(self.r1c5)
        row1List.append(self.r1c6)
        row1List.append(self.r1c7)
        row1List.append(self.r1c8)
        row1List.append(self.r1c9)
        row1List.append(self.r1c10)
        self.map.append(row1List)
        row2List = []
        row2List.append(self.r2c0)
        row2List.append(self.r2c1)
        row2List.append(self.r2c2)
        row2List.append(self.r2c3)
        row2List.append(self.r2c4)
        row2List.append(self.r2c5)
        row2List.append(self.r2c6)
        row2List.append(self.r2c7)
        row2List.append(self.r2c8)
        row2List.append(self.r2c9)
        row2List.append(self.r2c10)
        self.map.append(row2List)
        row3List = []
        row3List.append(self.r3c0)
        row3List.append(self.r3c1)
        row3List.append(self.r3c2)
        row3List.append(self.r3c3)
        row3List.append(self.r3c4)
        row3List.append(self.r3c5)
        row3List.append(self.r3c6)
        row3List.append(self.r3c7)
        row3List.append(self.r3c8)
        row3List.append(self.r3c9)
        row3List.append(self.r3c10)
        self.map.append(row3List)
        row4List = []
        row4List.append(self.r4c0)
        row4List.append(self.r4c1)
        row4List.append(self.r4c2)
        row4List.append(self.r4c3)
        row4List.append(self.r4c4)
        row4List.append(self.r4c5)
        row4List.append(self.r4c6)
        row4List.append(self.r4c7)
        row4List.append(self.r4c8)
        row4List.append(self.r4c9)
        row4List.append(self.r4c10)
        self.map.append(row4List)
        row5List = []
        row5List.append(self.r5c0)
        row5List.append(self.r5c1)
        row5List.append(self.r5c2)
        row5List.append(self.r5c3)
        row5List.append(self.r5c4)
        row5List.append(self.r5c5)
        row5List.append(self.r5c6)
        row5List.append(self.r5c7)
        row5List.append(self.r5c8)
        row5List.append(self.r5c9)
        row5List.append(self.r5c10)
        self.map.append(row5List)
        row6List = []
        row6List.append(self.r6c0)
        row6List.append(self.r6c1)
        row6List.append(self.r6c2)
        row6List.append(self.r6c3)
        row6List.append(self.r6c4)
        row6List.append(self.r6c5)
        row6List.append(self.r6c6)
        row6List.append(self.r6c7)
        row6List.append(self.r6c8)
        row6List.append(self.r6c9)
        row6List.append(self.r6c10)
        self.map.append(row6List)
        row7List = []
        row7List.append(self.r7c0)
        row7List.append(self.r7c1)
        row7List.append(self.r7c2)
        row7List.append(self.r7c3)
        row7List.append(self.r7c4)
        row7List.append(self.r7c5)
        row7List.append(self.r7c6)
        row7List.append(self.r7c7)
        row7List.append(self.r7c8)
        row7List.append(self.r7c9)
        row7List.append(self.r7c10)
        self.map.append(row7List)
        row8List = []
        row8List.append(self.r8c0)
        row8List.append(self.r8c1)
        row8List.append(self.r8c2)
        row8List.append(self.r8c3)
        row8List.append(self.r8c4)
        row8List.append(self.r8c5)
        row8List.append(self.r8c6)
        row8List.append(self.r8c7)
        row8List.append(self.r8c8)
        row8List.append(self.r8c9)
        row8List.append(self.r8c10)
        self.map.append(row8List)
        row9List = []
        row9List.append(self.r9c0)
        row9List.append(self.r9c1)
        row9List.append(self.r9c2)
        row9List.append(self.r9c3)
        row9List.append(self.r9c4)
        row9List.append(self.r9c5)
        row9List.append(self.r9c6)
        row9List.append(self.r9c7)
        row9List.append(self.r9c8)
        row9List.append(self.r9c9)
        row9List.append(self.r9c10)
        self.map.append(row9List)
        row10List = []
        row10List.append(self.r10c0)
        row10List.append(self.r10c1)
        row10List.append(self.r10c2)
        row10List.append(self.r10c3)
        row10List.append(self.r10c4)
        row10List.append(self.r10c5)
        row10List.append(self.r10c6)
        row10List.append(self.r10c7)
        row10List.append(self.r10c8)
        row10List.append(self.r10c9)
        row10List.append(self.r10c10)
        self.map.append(row10List)
        self.printBuffer()
        self.handleSelect()

        self.signalStatus("Welcome to PlanetJ1 Alpha Version!")
        # threaded print buffer, daemon means ends with main execution
        threading.Thread(target=self.autoPrintBuffer, daemon=True).start()
        threading.Thread(target=self.autoStatus, daemon=True).start()

    def handleUp(self):
        if (self.viewModeBool is False):
            fromRow = self.game.getLocationAt(self.selectedRow, self.selectedCol)[0]
            fromCol = self.game.getLocationAt(self.selectedRow, self.selectedCol)[1]
            if (self.game.moveUp(1, fromRow, fromCol)):
                if (fromRow > self.sizeGame - 6):
                    self.selectedRow = self.selectedRow - 1
                elif (self.game.moveViewUp() is False):
                    self.selectedRow = self.selectedRow - 1
        else:
            self.game.moveViewUp()
        self.printBuffer()


    def handleDown(self):
        if (self.viewModeBool is False):
            fromRow = self.game.getLocationAt(self.selectedRow, self.selectedCol)[0]
            fromCol = self.game.getLocationAt(self.selectedRow, self.selectedCol)[1]
            if (self.game.moveDown(1, fromRow, fromCol)):
                if (fromRow < 5):
                    self.selectedRow = self.selectedRow + 1
                elif (self.game.moveViewDown() is False):
                    self.selectedRow = self.selectedRow + 1
        else:
            self.game.moveViewDown()
        self.printBuffer()

    def handleLeft(self):
        if (self.viewModeBool is False):
            fromRow = self.game.getLocationAt(self.selectedRow, self.selectedCol)[0]
            fromCol = self.game.getLocationAt(self.selectedRow, self.selectedCol)[1]
            if (self.game.moveLeft(1, fromRow, fromCol)):
                if (fromCol > self.sizeGame - 6):
                    self.selectedCol = self.selectedCol - 1
                elif (self.game.moveViewLeft() is False):
                    self.selectedCol = self.selectedCol - 1
            else:
                self.signalStatus("Invalid move!")
        else:
            self.game.moveViewLeft()
        self.printBuffer()

    def handleRight(self):
        if (self.viewModeBool is False):
            fromRow = self.game.getLocationAt(self.selectedRow, self.selectedCol)[0]
            fromCol = self.game.getLocationAt(self.selectedRow, self.selectedCol)[1]
            if (self.game.moveRight(1, fromRow, fromCol)):
                if (fromCol < 5):
                    self.selectedCol = self.selectedCol + 1
                elif (self.game.moveViewRight() is False):
                    self.selectedCol = self.selectedCol + 1
        else:
            self.game.moveViewRight()
        self.printBuffer()


    def handleViewMode(self):
        if self.viewModeBool is False:
            self.viewModeBool = True
            self.commandList.clear()
            self.viewMode.setText("Set Mode")
        elif self.viewModeBool is True:
            self.viewModeBool = False
            self.viewMode.setText("View Mode")
            self.selectedRow = 5
            self.selectedCol = 5
            self.handleSelect()

    def handleNext(self, to):
        if (to[0] != -1 and to[1] != -1):
            selectCor = self.game.jumpTo(to[0], to[1])
            self.selectedRow = selectCor[0]
            self.selectedCol = selectCor[1]
            self.viewModeBool = False
            self.viewMode.setText("View Mode")
        self.printBuffer()
        self.handleSelect()


    def handleNextBuilder(self):
        to = self.game.getUnitList().getNextBuilder()
        self.handleNext(to)

    def handleNextWorker(self):
        to = self.game.getUnitList().getNextWorker()
        self.handleNext(to)

    def handleNextSoldier(self):
        to = self.game.getUnitList().getNextSoldier()
        self.handleNext(to)

    def handleNextFactory(self):
        to = self.game.getBuildingList().getNextFactory()
        self.handleNext(to)


    def handleEngage(self):
        command = self.commandList.currentRow()
        result = self.game.issueCommandsAt(self.selectedRow, self.selectedCol, command)
        self.signalStatus(result)


    def handleSelect(self):
        self.commandList.clear()
        self.statusList.clear()
        commands = self.game.getCommandsAt(self.selectedRow, self.selectedCol)
        status = self.game.getStatusAt(self.selectedRow, self.selectedCol)
        self.commandList.addItems(commands)
        self.statusList.addItems(status)
        threading.Thread(target=self.lookHere, daemon=True).start()


    def lookHere(self):
        self.map[self.selectedRow][self.selectedCol].setText("!!")
        sleep(0.20)
        self.map[self.selectedRow][self.selectedCol].setText("!!")
        sleep(0.20)
        self.map[self.selectedRow][self.selectedCol].setText("!!")


    def autoStatus(self):
        while True:
            sleep(1)
            self.statusList.clear()
            status = self.game.getStatusAt(self.selectedRow, self.selectedCol)
            self.statusList.addItems(status)


    # handle if the About tab is clicked
    def handleAbout(self):
        # make the dialog
        self.dialog = AboutDialog()
        # show the dialog
        self.dialog.show()

    # handle if the Exit tab is clicked
    def handleExit(self):
        self.signalStatus("Exiting...")
        # exit the program
        exit()

    # this function just streamlines printing something to both the outputList and the terminal
    def signalStatus(self, string):
        self.infoList.addItem(string)

    # read the buffer every so often
    # should be threaded
    def autoPrintBuffer(self):
        while True:
            self.printBuffer()
            sleep(0.05)


    # print the buffer
    def printBuffer(self):
        self.game.getBuffer()
        resources = self.game.getResources()
        self.minLabel.setText(str(resources[0]))
        self.gasLabel.setText(str(resources[1]))
        self.nrgLabel.setText(str(resources[2]))
        y = 0
        for row in self.map:
            x = 0
            for button in row:
                button.setText(self.game.getPNG(y, x))
                x = x + 1
            y = y + 1


    def selectTile(self):
        return


# this is the AboutDialog class
class AboutDialog(QtWidgets.QMainWindow, AboutPlanetJ1.Ui_MainWindow):
    def __init__(self, parent=None):
        super(AboutDialog, self).__init__(parent)
        self.setupUi(self)
        # if the aboutOk button is clicked, handle it
        self.aboutOk.clicked.connect(self.handleAboutOk)

    # handle the aboutOk button
    def handleAboutOk(self):
        # close the about dialog
        self.close()


class StartPrompt(QtWidgets.QMainWindow, StartPrompt.Ui_MainWindow):
    def __init__(self, parent=None):
        super(StartPrompt, self).__init__(parent)
        self.setupUi(self)
        self.engageButton.clicked.connect(self.handleEngageOk)

    def handleEngageOk(self):
        gRows = int(self.rowEdit.text())
        gCols = int(self.colEdit.text())
        gSize = int(self.sizeEdit.text())
        gDiff = int(self.diffEdit.text())
        self.close()


# this is the main driver for the GUI
def main():
    debug = True
    print("PlanetJ1Qt Alpha Version")
    print("This terminal output is for diagnostic purposes only.\n")
    # TODO: make an initial form to request rows, cols, and difficulty
    # start the game server
    try:
        print("Launching game sever...")
        if not (debug):
            subprocess.run("java -jar PlanetJ1.jar " + "11" + " " + "11" + " " + gSize + " " + gDiff, shell=True, check=True)
    except:
        print("There was an error launching the game server.")
        print("This means that either Java isn't installed on your system")
        print("or that PlanetJ1.jar couldn't be found.")
        return

    # make the app
    app = QApplication(sys.argv)
    # make the main window form
    form = Driver(gRows, gCols, gDiff)
    # show the main window
    form.show()
    # exit the program after it's done (closes or runs to end)
    app.exec()


# if the script is run directly, run the main function
if __name__=='__main__':
    main()