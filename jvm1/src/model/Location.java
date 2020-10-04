/*
Author:         Shane Stacy
Description:    This class keeps track of a tiles's location.
*/

package model;

public class Location {
    
    private int row;
    private int column;

    public Location(int row1, int column1) {
        row = row1;
        column = column1;
    }

    public Location() {
        row = -1;
        column = -1;
    }


    
    public int getRow() {
        return this.row;
    }

    public int getColumn() {
        return this.column;
    }

    public void setLocation(int row2, int column2) {
        this.row = row2;
        this.column = column2;
    }
}
