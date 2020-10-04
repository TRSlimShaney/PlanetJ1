using System;
using System.Collections.Generic;

namespace PlanetCS1 {
    public interface ITile {
        Location loc {get;set;}
        Boolean occ {get;set;}
        Boolean use {get;set;}
        Boolean drive {get;set;}
        Boolean traverse {get;set;}
        int owner {get;set;}
        Boolean blank {get;set;}
        int minCost {get;set;}
        int gasCost {get;set;}
        int nrgCost {get;set;}
        int minSal {get;set;}
        int gasSal {get;set;}
        int nrgSal {get;set;}
        int wait {get;set;}
        int health {get;set;}
        Boolean abort {get;set;}
        List<String> commands {get;set;}
        String icon {get;set;}
    }
}