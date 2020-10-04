import { ALocation as ALocation } from "../../Utilities"
import { ITile as ITile } from "../../Abstract/ITile"
import { BlankTile as BlankTile } from "../../Abstract/BlankTile"
import { PFactory as PFactory } from "./PFactory"

export class PlayerBuildings {
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

    getNextFactory() : ALocation {
        //  for the number of units
        for (let i = 0; i < this.units.length; ++i) {
            //  get the next unit
            const unit = this.getNext()
            //  if the unit is a pfactory
            if (unit instanceof PFactory) {
                //  return the location
                return unit.loc
            }
        }
        //  pfactory not found, return null location
        return new ALocation(-1, -1)
    }
}