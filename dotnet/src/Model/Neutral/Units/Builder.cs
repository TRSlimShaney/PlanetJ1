using System;
using System.Collections.Generic;

namespace PlanetCS1 {
    public abstract class Builder : Unit {
        public Builder() {
            this.occ = true;
            this.traverse = true;
            this.minCost = 50;
            this.gasCost = 20;
            this.nrgCost = 0;
            this.commands = new List<String>(){"Build a Factory (200, 100, 0)", "Abort"};
            this.health = 20;
            this.minSal = 0;
            this.gasSal = 0;
            this.nrgSal = 0;
        }
    }
}