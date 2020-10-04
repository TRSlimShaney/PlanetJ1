using System;

namespace PlanetCS1 {
    public class Location {
        public int row {get;set;}
        public int col {get;set;}
        
        public Location(int row, int col) {
            this.row = row;
            this.col = col;
        }

        public void setLoc (int row, int col) {
            this.row = row;
            this.col = col;
        }
    }
}