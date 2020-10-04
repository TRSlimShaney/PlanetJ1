/*
Author:         Shane Stacy
Description:    This class is a map which is made up of a 2D array of tiles.
*/

package model;

public class Map {
    
    private int temperature;
    private int terrainType;
    public ITile[][] map;

    public Map(int width, int height, int type2, int temp) {
        map = new ITile[width][height];
        temperature = temp;
        terrainType = type2;
    }

    public int getTemp() {
        return this.temperature;
    }

    public int getTerrainType() {
        return this.terrainType;
    }
    
    public ITile[][] getMap() {
        return this.map;
    }
}
