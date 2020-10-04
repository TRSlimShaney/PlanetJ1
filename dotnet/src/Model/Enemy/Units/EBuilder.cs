using System;

namespace PlanetCS1 {
    class EBuilder : Builder {
        public EBuilder(Location location) {
            this.loc = location;
            this.use = true;
            this.drive = true;
            this.owner = 2;
            this.icon = "eB";
        }
    }
}