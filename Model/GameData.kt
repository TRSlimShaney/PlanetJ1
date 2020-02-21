package Model

class GameData (val diff: Int){
    var minerals = 0
    var gas = 0
    var energy = 0
    init {
            if (diff == 0) {
                minerals = 200
                gas = 200
                energy = 200
            }
        }

}