using System;

namespace PlanetCS1 {
    class ENRGPlant : NRGPlant {
        public ENRGPlant(Location location) {
            this.loc = location;
            this.use = true;
            this.owner = 2;
            this.icon = "eP";
        }
    }
}