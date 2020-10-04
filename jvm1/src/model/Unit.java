/*
Author:         Shane Stacy
Description:    This class extends a tile into a unit.
*/

package model;

public abstract class Unit extends Tile {

    public Unit(int driv, int own, int x3, int y3) {
        super(driv, 1, own, x3, y3);
    }

    public Unit(int own, int x3, int y3) {
        super(1, own, x3, y3);
    }

       
}
