using System;
using System.Collections.Generic;

namespace PlanetCS1 {
    public abstract class HQ : Building {
        public HQ() {
            this.minCost = 0;
            this.gasCost = 0;
            this.nrgCost = 0;
            this.commands = new List<String>{"Abort"};
            this.health = 200;
        }
    }
}