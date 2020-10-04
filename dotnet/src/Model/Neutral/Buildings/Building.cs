using System;

namespace PlanetCS1 {
    public abstract class Building : RealTile {
        public Building() {
            this.occ = true;
            this.drive = false;
            this.traverse = false;
            this.minSal = 0;
            this.gasSal = 0;
            this.nrgSal = 0;
        }
    }
}