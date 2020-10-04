using System;

namespace PlanetCS1 {
    class ESoldier : Soldier {
        public ESoldier(Location location) {
            this.loc = location;
            this.use = true;
            this.drive = true;
            this.owner = 2;
            this.icon = "eS";
        }
    }
}