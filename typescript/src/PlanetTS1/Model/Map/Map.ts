
import { ALocation as ALocation} from "../Utilities"
import { ITile as ITile } from "../Abstract/ITile"
import { BlankTile as BlankTile } from "../Abstract/BlankTile"

export class AMap {
    size : number
    tiles : Array<Array<ITile>>

    constructor(size: number) {
        this.size = size
        this.tiles = new Array<Array<ITile>>()
        this.clearMap()
    }

    clearMap() {
        for (let i = 0; i < this.size; ++i) {
            let row = new Array<ITile>()
            for (let j = 0; j < this.size; ++j) {
                const loc = new ALocation(i, j)
                const blank = new BlankTile(loc)
                row.push(blank)
            }
            this.tiles.push(row)
        }
    }
}