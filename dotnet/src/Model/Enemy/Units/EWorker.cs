using System;

namespace PlanetCS1 {
    class EWorker : Worker {
        public EWorker(Location location) {
            this.loc = location;
            this.use = true;
            this.drive = true;
            this.owner = 2;
            this.icon = "eW";
        }
    }
}