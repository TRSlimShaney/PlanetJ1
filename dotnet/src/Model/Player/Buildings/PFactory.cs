using System;

namespace PlanetCS1 {
    class PFactory : Factory {
        public PFactory(Location location) {
            this.loc = location;
            this.use = true;
            this.owner = 1;
            this.icon = "pF";
        }
    }
}