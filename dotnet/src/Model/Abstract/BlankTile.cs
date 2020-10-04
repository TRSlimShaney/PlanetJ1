using System;

namespace PlanetCS1 {
    class BlankTile : Tile {
        public BlankTile(Location location) {
            this.loc = location;
            this.occ = false;
            this.use = false;
            this.drive = false;
            this.traverse = true;
            this.owner = 0;
            this.blank = true;
            this.icon = "?";
            this.minCost = 0;
            this.gasCost = 0;
            this.nrgCost = 0;
            this.wait = 0;
            this.health = 0;
            this.minSal = 0;
            this.nrgSal = 0;
        }
    }
}