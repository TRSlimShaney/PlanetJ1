using System;

namespace PlanetCS1 {
    class PBuilder : Builder {
        public PBuilder(Location location) {
            this.loc = location;
            this.use = true;
            this.drive = true;
            this.owner = 1;
            this.icon = "pB";
        }
    }
}