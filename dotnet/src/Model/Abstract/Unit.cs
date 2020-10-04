using System;

namespace PlanetCS1 {
    public abstract class Unit : RealTile {
        public Unit() {
            this.occ = true;
            this.traverse = false;
            this.health = 10;
            this.minSal = 0;
            this.gasSal = 0;
            this.nrgSal = 0;
        }
    }
}