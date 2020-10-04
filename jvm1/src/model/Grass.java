/*
Author:         Shane Stacy
Description:    This program does stuff.
*/

package model;

import javafx.scene.image.Image;

public class Grass extends Tile {
    
    private int typeOfGrass;
    private Image icon3;

    public Grass(int type, int x3, int y3) {
        super(1, 0, 0, x3, y3);
        typeOfGrass = type;
        icon3 = new Image("Grass.png");
        setTheIcon(icon3);
    }

    public boolean isValidMove(Move m, ITile tile[][]) {
        return false;
    }
}
