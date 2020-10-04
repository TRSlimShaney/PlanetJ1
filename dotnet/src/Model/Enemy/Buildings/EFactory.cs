using System;

namespace PlanetCS1 {
    class EFactory : Factory {
        public EFactory(Location location) {
            this.loc = location;
            this.use = true;
            this.owner = 2;
            this.icon = "eF";
        }
    }
}