using System;

namespace PlanetCS1 {
    class GasVent : Resource {
        public GasVent(Location location) {
            this.loc = location;
            this.icon = "GV";
            this.health = 1000000;
            this.minSal = 0;
            this.gasSal = 1;
            this.nrgSal = 0;
        }
    }
}