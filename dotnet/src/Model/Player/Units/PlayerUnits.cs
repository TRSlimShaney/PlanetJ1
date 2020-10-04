using System;
using System.Collections.Generic;

namespace PlanetCS1 {
    class PlayerUnits {
        public List<ITile> units {get;set;}
        int counter;

        public PlayerUnits() {
            this.units = new List<ITile>();
            this.counter = 0;
        }

        List<int> getNextBuilder() {
            if (this.units.Count == 0) {
                return new List<int>(){-1, -1};
            }
            else if (this.units.Count == 1 && this.units[0] is PBuilder) {
                return new List<int>(){this.units[0].loc.row, this.units[0].loc.col};
            }
            int stop = this.units.Count;
            for (int i = 0; i < this.units.Count; ++i) {
                counter+= 1;
                if (counter == this.units.Count) {
                    counter = 0;
                }
                if (this.units[counter] is PBuilder) {
                    return new List<int>(){this.units[counter].loc.row, units[counter].loc.col};
                }
            }
            return new List<int>(){-1, -1};
        }

        List<int> getNextWorker() {
            if (this.units.Count == 0) {
                return new List<int>(){-1, -1};
            }
            else if (this.units.Count == 1 && this.units[0] is PWorker) {
                return new List<int>(){this.units[0].loc.row, this.units[0].loc.col};
            }
            int stop = this.units.Count;
            for (int i = 0; i < this.units.Count; ++i) {
                counter+= 1;
                if (counter == this.units.Count) {
                    counter = 0;
                }
                if (this.units[counter] is PWorker) {
                    return new List<int>(){this.units[counter].loc.row, units[counter].loc.col};
                }
            }
            return new List<int>(){-1, -1};
        }

        List<int> getNextSoldier() {
            if (this.units.Count == 0) {
                return new List<int>(){-1, -1};
            }
            else if (this.units.Count == 1 && this.units[0] is PSoldier) {
                return new List<int>(){this.units[0].loc.row, this.units[0].loc.col};
            }
            int stop = this.units.Count;
            for (int i = 0; i < this.units.Count; ++i) {
                counter+= 1;
                if (counter == this.units.Count) {
                    counter = 0;
                }
                if (this.units[counter] is PSoldier) {
                    return new List<int>(){this.units[counter].loc.row, units[counter].loc.col};
                }
            }
            return new List<int>(){-1, -1};
        }
    }
}