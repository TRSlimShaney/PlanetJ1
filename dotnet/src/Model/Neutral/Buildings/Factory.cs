using System;
using System.Collections.Generic;

namespace PlanetCS1 {
    public abstract class Factory : Building {
        public Factory() {
            this.minCost = 200;
            this.gasCost = 100;
            this.nrgCost = 0;
            this.commands = new List<String>(){"Create a Builder (50, 20, 0)", "Create a Worker (20, 10, 0)", "Abort"};
            this.health = 100;
        }
    }
}