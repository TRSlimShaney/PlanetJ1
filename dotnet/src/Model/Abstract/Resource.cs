using System;

namespace PlanetCS1 {
    public abstract class Resource : RealTile {
        public Resource() {
            this.occ = true;
            this.use = false;
            this.drive = false;
            this.traverse = false;
            this.owner = 0;
            this.minSal = 0;
            this.gasCost = 0;
            this.nrgCost = 0;
        }
    }
}