import { ALocation as ALocation } from "../../Utilities"
import { ITile as ITile } from "../../Abstract/ITile"
import { BlankTile as BlankTile } from "../../Abstract/BlankTile"
import { PBuilder as PBuilder } from "./PBuilder"
import { PWorker as PWorker } from "./PWorker"
import { PSoldier as PSoldier } from "./PSoldier"

export class PlayerUnits {
    units : Array<ITile>
    private counter : number

    constructor() {
        this.units = new Array<ITile>()
        this.counter = 0
    }

    //  get the next tile in the list
    private getNext() : ITile {
        //  if there are no units
        if (this.units.length === 0) {
            //  return null tile
            return new BlankTile(new ALocation(-1, -1))
        }  //  if there is only one unit
        else if (this.units.length === 1) {
            //  return the one unit
            return this.units[0]
        }

        //  if the current index is less than the length
        if (this.counter < this.units.length) {
            //  increase the index
            ++this.counter
        }
        else {
            //  otherwise, set the index to zero
            this.counter = 0
        }
        //  return the tile
        return this.units[this.counter]
    }

    //  get the location of the next builder in the list
    getNextBuilder() : ALocation {
        //  for the number of units
        for (let i = 0; i < this.units.length; ++i) {
            //  get the next unit
            const unit = this.getNext()
            //  if the unit is a pbuilder
            if (unit instanceof PBuilder) {
                //  return the location
                return unit.loc
            }
        }
        //  pbuilder not found, return null location
        return new ALocation(-1, -1)
    }

    //  get the location of the next worker in the list
    getNextWorker() : ALocation {
        //  for the number of units
        for (let i = 0; i < this.units.length; ++i) {
            //  get the next unit
            const unit = this.getNext()
            //  if the unit is a pworker
            if (unit instanceof PWorker) {
                //  return the location
                return unit.loc
            }
        }
        //  pworker not found, return null location
        return new ALocation(-1, -1)
    }

    //  get the location of the next soldier in the list
    getNextSoldier() : ALocation {
        //  for the number of units
        for (let i = 0; i < this.units.length; ++i) {
            //  get the next unit
            const unit = this.getNext()
            //  if the unit is a psoldier
            if (unit instanceof PSoldier) {
                //  return the location
                return unit.loc
            }
        }
        //  psoldier not found, return null location
        return new ALocation(-1, -1)
    }
}