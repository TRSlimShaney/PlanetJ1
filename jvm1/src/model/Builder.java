/*
Author:         Shane Stacy
Description:    This class extends unit into a builder unit.
*/

package model;

public abstract class Builder extends Unit {

    private int build;
    
    public Builder(int driv, int own, int x3, int y3) {
        super(driv, own, x3, y3);
        build = 1;
    }
    
    public int canBuild() {
        return this.build;
    }
    
}
