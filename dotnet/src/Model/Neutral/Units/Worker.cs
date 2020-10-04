using System;
using System.Collections.Generic;

namespace PlanetCS1 {
    public abstract class Worker : Unit {
        public Worker() {
            this.occ = true;
            this.traverse = false;
            this.minCost = 20;
            this.gasCost = 10;
            this.nrgCost = 10;
            this.health = 20;
            this.commands = new List<String>(){"Gather resources", "Abort"};
        }
    }
}