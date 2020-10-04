/*
Author:         Shane Stacy
Description:    This class is a 2D 2x2 array of tiles.
*/

package model;

import javafx.scene.image.Image;

public abstract class Chunk {

    private ITile[][] chunk;

    public Chunk(int occ, int own, int x4, int y4) {
        chunk = new ITile[2][2];
        chunk[0][0].setLocation(x4, y4);
        chunk[1][0].setLocation(x4 + 1, y4);
        chunk[0][1].setLocation(x4, y4 + 1);
        chunk[1][1].setLocation(x4 + 1, y4 + 1);
    }

    public void setTheIcon(Image icon) {
        chunk[0][0].setTheIcon(icon);
        chunk[1][0].setTheIcon(icon);
        chunk[0][1].setTheIcon(icon);
        chunk[1][1].setTheIcon(icon);
    }
}
