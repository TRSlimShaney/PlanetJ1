using System;

namespace PlanetCS1 {
    class Water : RealTile {
        public Water(Location location) {
            this.loc = location;
            this.occ = false;
            this.use = false;
            this.drive = false;
            this.traverse = false;
            this.owner = 0;
            this.icon = "///";
            this.minCost = 0;
            this.gasCost = 0;
            this.nrgCost = 0;
            this.health = 0;
            this.minSal = 0;
            this.gasSal = 0;
            this.nrgSal = 0;
        }
    }
}