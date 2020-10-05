# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'StartPrompt.ui'
#
# Created by: PyQt5 UI code generator 5.10.1
#
# WARNING! All changes made in this file will be lost!

from PyQt5 import QtCore, QtGui, QtWidgets

class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(558, 427)
        self.centralwidget = QtWidgets.QWidget(MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.groupBox = QtWidgets.QGroupBox(self.centralwidget)
        self.groupBox.setGeometry(QtCore.QRect(30, 30, 511, 321))
        self.groupBox.setObjectName("groupBox")
        self.rowEdit = QtWidgets.QLineEdit(self.groupBox)
        self.rowEdit.setGeometry(QtCore.QRect(110, 60, 113, 46))
        self.rowEdit.setObjectName("rowEdit")
        self.colEdit = QtWidgets.QLineEdit(self.groupBox)
        self.colEdit.setGeometry(QtCore.QRect(360, 60, 113, 46))
        self.colEdit.setObjectName("colEdit")
        self.label = QtWidgets.QLabel(self.groupBox)
        self.label.setGeometry(QtCore.QRect(40, 60, 71, 34))
        self.label.setObjectName("label")
        self.label_2 = QtWidgets.QLabel(self.groupBox)
        self.label_2.setGeometry(QtCore.QRect(250, 60, 121, 34))
        self.label_2.setObjectName("label_2")
        self.label_3 = QtWidgets.QLabel(self.groupBox)
        self.label_3.setGeometry(QtCore.QRect(250, 140, 111, 34))
        self.label_3.setObjectName("label_3")
        self.diffEdit = QtWidgets.QLineEdit(self.groupBox)
        self.diffEdit.setGeometry(QtCore.QRect(360, 140, 113, 46))
        self.diffEdit.setObjectName("diffEdit")
        self.engageButton = QtWidgets.QPushButton(self.groupBox)
        self.engageButton.setGeometry(QtCore.QRect(340, 260, 153, 46))
        self.engageButton.setObjectName("engageButton")
        self.label_4 = QtWidgets.QLabel(self.groupBox)
        self.label_4.setGeometry(QtCore.QRect(40, 140, 61, 34))
        self.label_4.setObjectName("label_4")
        self.sizeEdit = QtWidgets.QLineEdit(self.groupBox)
        self.sizeEdit.setGeometry(QtCore.QRect(110, 140, 113, 46))
        self.sizeEdit.setObjectName("sizeEdit")
        MainWindow.setCentralWidget(self.centralwidget)
        self.menubar = QtWidgets.QMenuBar(MainWindow)
        self.menubar.setGeometry(QtCore.QRect(0, 0, 558, 40))
        self.menubar.setObjectName("menubar")
        MainWindow.setMenuBar(self.menubar)
        self.statusbar = QtWidgets.QStatusBar(MainWindow)
        self.statusbar.setObjectName("statusbar")
        MainWindow.setStatusBar(self.statusbar)

        self.retranslateUi(MainWindow)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "PlanetJ1 Ready Room"))
        self.groupBox.setTitle(_translate("MainWindow", "New Game:"))
        self.rowEdit.setText(_translate("MainWindow", "11"))
        self.colEdit.setText(_translate("MainWindow", "11"))
        self.label.setText(_translate("MainWindow", "Rows:"))
        self.label_2.setText(_translate("MainWindow", "Columns:"))
        self.label_3.setText(_translate("MainWindow", "Difficulty:"))
        self.diffEdit.setText(_translate("MainWindow", "0"))
        self.engageButton.setText(_translate("MainWindow", "Engage!"))
        self.label_4.setText(_translate("MainWindow", "Size:"))
        self.sizeEdit.setText(_translate("MainWindow", "11"))

