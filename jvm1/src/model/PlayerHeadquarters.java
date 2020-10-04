/*
Author:         Shane Stacy
Description:    This class extends a headquarters into a player headquarters.
*/

package model;

import javafx.scene.image.Image;

public class PlayerHeadquarters extends Headquarters {

    private Image icon3;

    public PlayerHeadquarters(int x4, int y4) {
        super(1, x4, y4);
        icon3 = new Image("PlayerHeadquarters.png");
        this.setTheIcon(icon3);
    }
}
