using System;

namespace PlanetCS1 {
    class Minerals : Resource {
        public Minerals(Location location) {
            this.loc = location;
            this.icon = "M";
            this.health = 50;
            this.minSal = 10;
            this.gasSal = 0;
            this.nrgSal = 0;
        }
    }
}