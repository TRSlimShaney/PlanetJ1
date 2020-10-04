using System;

namespace PlanetCS1 {
    class PHQ : HQ {
        public PHQ(Location location) {
            this.loc = location;
            this.use = true;
            this.owner = 1;
            this.icon = "pHQ";
        }
    }
}