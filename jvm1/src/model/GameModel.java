/*
Author:         Shane Stacy
Description:    This class implements the game model.
*/

package model;

public class GameModel implements IGameModel {
    
    int playerMinerals;
    int playerWood;
    int playerEnergy;
    int difficulty;
    private ITile[][] field;

    public GameModel(int diff) {
        difficulty = diff;
        setupGame();
    }
    
    private void setupGame() {
        GrassField grassField;
        grassField = new GrassField(13, 20, 0);
        if (difficulty == 1) {
            playerMinerals = 100;
            playerWood = 100;
            playerEnergy = 200;
        }
        else if (difficulty == 2) {
            playerMinerals = 50;
            playerWood = 50;
            playerEnergy = 100;
        }
        else if (difficulty == 3) {
            playerMinerals = 30;
            playerWood = 30;
            playerEnergy = 50;
        }
        field = new ITile[grassField.map.length][grassField.map[0].length];
        field = grassField.map;
    }




    public int getPlayerMinerals() {
        return this.playerMinerals;
    }

    public int getPlayerWood() {
        return this.playerWood;
    }

    public int getPlayerEnergy() {
        return this.playerEnergy;
    }

    public ITile[][] getField() {
        return this.field;
    }

    public ITile tileAt(Location s) {
        return (ITile) field[s.getRow()][s.getColumn()];
    }

    public ITile tileAt(int row, int column ) {
        return (ITile) field[row][column];
    }

}
