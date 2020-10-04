import * as React from "react"
import * as ReactDOM from "react-dom"
import { Model as PlanetTS1 } from "./PlanetTS1/Model/Model"
import { Controller } from "./controller"
import { View } from "./view"
import { PrintLine as println } from "./PlanetTS1/Model/Utilities"

//  length and width of the game
const size = 13
//  difficulty
const diff = 1
//  enables logging for debugging
const enableLog = true

if (enableLog) {
  println("DEBUGGING IS ENABLED")
  println("DEBUGGING MAY HINDER PERFORMANCE")
  println("YOU SHOULD DISABLE THIS UNLESS YOU ARE TRYING TO FIX BUGS")
}

const model = new PlanetTS1(size, size, diff, enableLog)
const view = new View()
const controller = new Controller(size, size, size, diff, model, view, enableLog)





/*
ReactDOM.render(
  <view.render />,
  document.getElementById("example")
)
*/
