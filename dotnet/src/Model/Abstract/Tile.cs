using System;
using System.Collections.Generic;

namespace PlanetCS1 {
    public abstract class Tile : ITile {
        public Location loc {get;set;}
        public Boolean occ {get;set;}
        public Boolean use {get;set;}
        public Boolean drive {get;set;}
        public Boolean traverse {get;set;}
        public int owner {get;set;}
        public Boolean blank {get;set;}
        public int minCost {get;set;}
        public int gasCost {get;set;}
        public int nrgCost {get;set;}
        public int minSal {get;set;}
        public int gasSal {get;set;}
        public int nrgSal {get;set;}
        public int wait {get;set;}
        public int health {get;set;}
        public String icon {get;set;}

        public Boolean abort {get;set;}
        public List<String> commands {get;set;}
        public Tile() {
            this.abort = false;
            this.commands = new List<String>() {"No commands available"};
        }
    }
}