using System;

namespace PlanetCS1 {
    class EHQ : HQ {
        public EHQ(Location location) {
            this.loc = location;
            this.use = true;
            this.owner = 2;
            this.icon = "eHQ";
        }
    }
}