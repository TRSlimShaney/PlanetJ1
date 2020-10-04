using System;

namespace PlanetCS1 {
    class PSoldier : Soldier {
        public PSoldier(Location location) {
            this.loc = location;
            this.use = true;
            this.drive = true;
            this.owner = 1;
            this.icon = "pS";
        }
    }
}