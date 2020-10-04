using System;
using System.Collections.Generic;

namespace PlanetCS1 {
    class Map {
        List<List<ITile>> tiles {get;set;}
        public Map(int size) {
            this.tiles = new List<List<ITile>>();

            for (int i = 0; i < size; ++i) {
                List<ITile> row = new List<ITile>();
                for (int j = 0; j < size; ++j) {
                    Location location = new Location(i, j);
                    BlankTile blank = new BlankTile(location);
                    row.Add(blank);
                }
                this.tiles.Add(row);
            }
        }
    }
}