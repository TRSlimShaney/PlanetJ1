using System;
using System.Collections.Generic;

namespace PlanetCS1 {
    class GrassUnits {
        int size;
        Location nullLocation;
        BlankTile bla;

        PHQ pHQ;
        PBuilder pBu;
        PWorker pWo;
        PSoldier pSo;

        EHQ eHQ;
        EBuilder eBu;
        EWorker eWo;
        ESoldier eSo;

        public List<List<ITile>> tiles {get;set;}

        public GrassUnits() {
            this.size = 31;
            this.nullLocation = new Location(-1, -1);
            this.bla = new BlankTile(nullLocation);

            this.pHQ = new PHQ(nullLocation);
            this.pBu = new PBuilder(nullLocation);
            this.pWo = new PWorker(nullLocation);
            this.pSo = new PSoldier(nullLocation);

            this.eHQ = new EHQ(nullLocation);
            this.eBu = new EBuilder(nullLocation);
            this.eWo = new EWorker(nullLocation);
            this.eSo = new ESoldier(nullLocation);

            var row01 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row02 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row03 = new List<ITile>(){bla, bla, pHQ, bla, pWo, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row04 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row05 = new List<ITile>(){bla, bla, pBu, bla, pSo, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row06 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row07 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row08 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row09 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row10 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row11 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row12 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row13 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row14 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row15 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row16 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row17 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row18 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row19 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row20 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row21 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row22 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row23 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row24 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row25 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row26 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row27 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, eSo, bla, eBu, bla, bla};
            var row28 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row29 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, eWo, bla, eHQ, bla, bla};
            var row30 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};
            var row31 = new List<ITile>(){bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla};

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