/*
Author:         Shane Stacy
Description:    This class defines the interface for a Tile.
*/

package model;

import javafx.scene.image.Image;

public interface ITile {
    
    int isOccupied();
    int isUsable();
    int isDriveable();
    int getOwner();
    boolean isValidMove(Move m, ITile tile[][]);
    void setLocation(int aRow, int aCol);
    void setTheIcon(Image icon2);
    Location getLocation();
    
    Image imageIcon();
    
    
}
