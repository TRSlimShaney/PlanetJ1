/*
Author:         Shane Stacy
Description:    This program does stuff.
*/

package model;

public class GrassField extends Map {

    private ITile grass;

    public GrassField(int width, int height, int type2) {
        super(width, height, type2, 70);
        
        for (int i = 0; i < width; i++) {
            for (int z = 0; z < height; z++) {
                grass = new Grass(0, i, z);
                map[i][z] = grass;
            }
        }
    }
}
