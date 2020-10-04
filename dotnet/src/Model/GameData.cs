using System;
using System.Collections.Generic;

namespace PlanetCS1 {
    class GameData {
        int minerals;
        int gas;
        int nrg;
        int diff;
        public GameData(int diff) {
            this.minerals = 0;
            this.gas = 0;
            this.nrg = 0;
            this.diff = diff;

            if (diff == -1) {
                this.minerals = 999999;
                this.gas = 999999;
                this.nrg = 999999;
            }
            else {
                this.minerals = 200;
                this.gas = 200;
                this.nrg = 200;
            }
        }

        public void addResource(int minDiff, int gasDiff, int nrgDiff) {
            this.minerals += minDiff;
            this.gas += gasDiff;
            this.nrg += nrgDiff;
        }

        public void subResource(int minDiff, int gasDiff, int nrgDiff) {
            this.minerals -= minDiff;
            this.gas -= gasDiff;
            this.nrg -= nrgDiff;
        }

        public List<int> getResources() {
            return new List<int>() {this.minerals, this.gas, this.nrg};
        }
    }
}