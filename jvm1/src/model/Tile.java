/*
Author:         Shane Stacy
Description:    This class is a basic tile on the map.
*/

package model;

import javafx.scene.image.Image;

public abstract class Tile implements ITile {
    
    private int occupied;
    private int usable;
    private int owner;
    private int driveable;
    private Location location;
    private Image icon;
    
    public Tile(int driv, int occ, int own, int x3, int y3) {
        location = new Location();
        driveable = driv;        
        occupied = occ;
        owner = own;
        location.setLocation(x3, y3);
    }
    
    public Tile(int occ, int own, int x3, int y3) {
        location = new Location();
        driveable = 0;        
        occupied = occ;
        owner = own;
        location.setLocation(x3, y3);
    }

    public Tile(int own, int x3, int y3) {
        location = new Location();
        driveable = 0;
        occupied = 0;
        owner = own;
        location.setLocation(x3, y3);
    }

    public int isOccupied() {
        return this.occupied;
    }
    
    public int isUsable() {
        return this.usable;
    }
    
    public int getOwner() {
        return this.owner;
    }

    public int isDriveable() {
        return this.driveable;
    }

    public Image imageIcon() {
        return icon;
    }

    public Location getLocation() {
        return this.location;
    }

    public void setTheIcon(Image icon2) {
        this.icon = icon2;
    }

    public void setLocation(int aRow, int aCol) {
        this.location.setLocation(aRow, aCol);
    }
}
