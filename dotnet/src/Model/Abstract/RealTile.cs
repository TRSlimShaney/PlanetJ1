using System;

namespace PlanetCS1 {
    public abstract class RealTile : Tile {
        public RealTile() {
            this.blank = false;
            this.wait = 0;
        }
    }
}