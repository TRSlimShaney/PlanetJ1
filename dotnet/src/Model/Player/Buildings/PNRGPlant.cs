using System;

namespace PlanetCS1 {
    class PNRGPlant : NRGPlant {
        public PNRGPlant(Location location) {
            this.loc = location;
            this.use = true;
            this.owner = 1;
            this.icon = "pP";
        }
    }
}