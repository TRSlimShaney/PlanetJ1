using System;
using System.Collections.Generic;

namespace PlanetCS1 {
    public abstract class Soldier : Unit {
        public Soldier() {
            this.occ = true;
            this.traverse = false;
            this.minCost = 20;
            this.gasCost = 10;
            this.nrgCost = 0;
            this.health = 50;
            this.commands = new List<String>(){"Attack enemy"};
        }
    }
}
