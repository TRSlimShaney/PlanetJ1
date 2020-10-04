/*
Author:         Shane Stacy
Description:    This class extends a builder into a player builder.
*/

package model;

import javafx.scene.image.Image;

public class PlayerBuilder extends Builder {

    private Image icon3;

    public PlayerBuilder(int x3, int y3) {
        super(1, 1, x3, y3);
        icon3 = new Image("PlayerBuilder.png");
        setTheIcon(icon3);
    }

    public boolean isValidMove(Move m, ITile tile[][]) {
        return m.isValidMoveForBuilder(m, tile);
    }
}
