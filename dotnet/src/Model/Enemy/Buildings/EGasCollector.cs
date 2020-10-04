using System;

namespace PlanetCS1 {
    class EGasCollector : GasCollector {
        public EGasCollector(Location location) {
            this.loc = location;
            this.use = true;
            this.owner = 2;
            this.icon = "eGC";
        }
    }
}