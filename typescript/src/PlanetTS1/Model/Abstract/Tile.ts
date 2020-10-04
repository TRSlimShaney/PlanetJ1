

abstract class Tile {
    abort : boolean
    commands : Array<string>
    constructor() {
        this.abort = false
        this.commands = new Array<string>("No commands available")
    }
}