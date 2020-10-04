using System;

namespace PlanetCS1 {
    class PGasCollector : GasCollector {
        public PGasCollector(Location location) {
            this.loc = location;
            this.use = true;
            this.owner = 1;
            this.icon = "pGC";
        }
    }
}