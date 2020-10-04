using System;
using System.Collections.Generic;

namespace PlanetCS1 {
    public abstract class NRGPlant : Building {
        public NRGPlant() {
            this.minCost = 200;
            this.gasCost = 100;
            this.nrgSal = 5;
            this.nrgCost = 0;
            this.commands = new List<String>(){"Abort"};
            this.health = 100;
        }

    }
}