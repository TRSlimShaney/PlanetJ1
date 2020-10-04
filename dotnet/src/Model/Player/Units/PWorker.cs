using System;

namespace PlanetCS1 {
    class PWorker : Worker {
        public PWorker(Location location) {
            this.loc = location;
            this.use = true;
            this.drive = true;
            this.owner = 1;
            this.icon = "pW";
        }
    }
}