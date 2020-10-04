using System;
using System.Collections.Generic;

namespace PlanetCS1 {
    class GrassWorld {
        public int size {get;set;}
        Location nullLocation;

        

        public List<List<ITile>> tiles {get;set;}

        public GrassWorld() {
            this.size = 31;
            this.nullLocation = new Location(-1, -1);

            GrassTile gra = new GrassTile(nullLocation);
            Water wat = new Water(nullLocation);
            Minerals min = new Minerals(nullLocation);
            GasVent gas = new GasVent(nullLocation);

            var row01 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row02 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row03 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row04 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row05 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row06 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, min, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row07 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, min, min, min, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row08 = new List<ITile>(){gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row09 = new List<ITile>(){gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row10 = new List<ITile>(){gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row11 = new List<ITile>(){gra, gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row12 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gas, gra, gra};
            var row13 = new List<ITile>(){gra, gra, gra, gra, gas, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra, gra};
            var row14 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, min, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra};
            var row15 = new List<ITile>(){gra, gra, gas, gra, gra, gra, gra, min, min, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gas, gra, gra, gra};
            var row16 = new List<ITile>(){gra, gra, gra, gra, gra, gas, gra, gra, min, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, min, gra, gra, gra, gra, gra};
            var row17 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, min, min, gra, gra, gra, gra};
            var row18 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, min, gra, gra, gra, gra, gra};
            var row19 = new List<ITile>(){gra, gra, gra, gas, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gas, gra};
            var row20 = new List<ITile>(){gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra};
            var row21 = new List<ITile>(){gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra};
            var row22 = new List<ITile>(){gra, gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra};
            var row23 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra, gra};
            var row24 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, wat, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row25 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, min, min, min, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row26 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, min, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row27 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, min, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row28 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, min, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row29 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, min, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row30 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, min, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};
            var row31 = new List<ITile>(){gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, min, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra, gra};

            this.tiles.Add(row01);
            this.tiles.Add(row02);
            this.tiles.Add(row03);
            this.tiles.Add(row04);
            this.tiles.Add(row05);
            this.tiles.Add(row06);
            this.tiles.Add(row07);
            this.tiles.Add(row08);
            this.tiles.Add(row09);
            this.tiles.Add(row10);
            this.tiles.Add(row11);
            this.tiles.Add(row12);
            this.tiles.Add(row13);
            this.tiles.Add(row14);
            this.tiles.Add(row15);
            this.tiles.Add(row16);
            this.tiles.Add(row17);
            this.tiles.Add(row18);
            this.tiles.Add(row19);
            this.tiles.Add(row20);
            this.tiles.Add(row21);
            this.tiles.Add(row22);
            this.tiles.Add(row23);
            this.tiles.Add(row24);
            this.tiles.Add(row25);
            this.tiles.Add(row26);
            this.tiles.Add(row27);
            this.tiles.Add(row28);
            this.tiles.Add(row29);
            this.tiles.Add(row30);
            this.tiles.Add(row31);

            for (int i = 0; i < size; ++i) {
                for (int j = 0; j < size; ++j) {
                    Location location = new Location(i, j);
                    this.tiles[i][j].loc = location;
                }
            }
        }
    }
}