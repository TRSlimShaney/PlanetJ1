if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'model'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'model'.");
} export var model = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toString = Kotlin.toString;
  BlankTile.prototype = Object.create(Tile.prototype);
  BlankTile.prototype.constructor = BlankTile;
  RealTile.prototype = Object.create(Tile.prototype);
  RealTile.prototype.constructor = RealTile;
  Unit.prototype = Object.create(RealTile.prototype);
  Unit.prototype.constructor = Unit;
  Builder.prototype = Object.create(Unit.prototype);
  Builder.prototype.constructor = Builder;
  Building.prototype = Object.create(RealTile.prototype);
  Building.prototype.constructor = Building;
  EBuilder.prototype = Object.create(Builder.prototype);
  EBuilder.prototype.constructor = EBuilder;
  Factory.prototype = Object.create(Building.prototype);
  Factory.prototype.constructor = Factory;
  EFactory.prototype = Object.create(Factory.prototype);
  EFactory.prototype.constructor = EFactory;
  GasCollector.prototype = Object.create(Building.prototype);
  GasCollector.prototype.constructor = GasCollector;
  EGasCollector.prototype = Object.create(GasCollector.prototype);
  EGasCollector.prototype.constructor = EGasCollector;
  HQ.prototype = Object.create(Building.prototype);
  HQ.prototype.constructor = HQ;
  EHQ.prototype = Object.create(HQ.prototype);
  EHQ.prototype.constructor = EHQ;
  NRGPlant.prototype = Object.create(Building.prototype);
  NRGPlant.prototype.constructor = NRGPlant;
  ENRGPlant.prototype = Object.create(NRGPlant.prototype);
  ENRGPlant.prototype.constructor = ENRGPlant;
  Soldier.prototype = Object.create(Unit.prototype);
  Soldier.prototype.constructor = Soldier;
  ESoldier.prototype = Object.create(Soldier.prototype);
  ESoldier.prototype.constructor = ESoldier;
  Worker.prototype = Object.create(Unit.prototype);
  Worker.prototype.constructor = Worker;
  EWorker.prototype = Object.create(Worker.prototype);
  EWorker.prototype.constructor = EWorker;
  Resource.prototype = Object.create(RealTile.prototype);
  Resource.prototype.constructor = Resource;
  GasVent.prototype = Object.create(Resource.prototype);
  GasVent.prototype.constructor = GasVent;
  GrassTile.prototype = Object.create(RealTile.prototype);
  GrassTile.prototype.constructor = GrassTile;
  Minerals.prototype = Object.create(Resource.prototype);
  Minerals.prototype.constructor = Minerals;
  PBuilder.prototype = Object.create(Builder.prototype);
  PBuilder.prototype.constructor = PBuilder;
  PFactory.prototype = Object.create(Factory.prototype);
  PFactory.prototype.constructor = PFactory;
  PGasCollector.prototype = Object.create(GasCollector.prototype);
  PGasCollector.prototype.constructor = PGasCollector;
  PHQ.prototype = Object.create(HQ.prototype);
  PHQ.prototype.constructor = PHQ;
  PNRGPlant.prototype = Object.create(NRGPlant.prototype);
  PNRGPlant.prototype.constructor = PNRGPlant;
  PSoldier.prototype = Object.create(Soldier.prototype);
  PSoldier.prototype.constructor = PSoldier;
  PWorker.prototype = Object.create(Worker.prototype);
  PWorker.prototype.constructor = PWorker;
  Water.prototype = Object.create(RealTile.prototype);
  Water.prototype.constructor = Water;
  function BlankTile(location) {
    Tile.call(this);
    this.loc_7p7skm$_0 = location;
    this.occ_7p9gmv$_0 = false;
    this.use_7pdmgv$_0 = false;
    this.drive_96rk9o$_0 = false;
    this.traverse_896cyk$_0 = true;
    this.owner_eh387n$_0 = 0;
    this.blank_858a8i$_0 = true;
    this.icon_pkiodx$_0 = '?';
    this.minCost_8m13d3$_0 = 0;
    this.gasCost_4qsb34$_0 = 0;
    this.nrgCost_o5onpy$_0 = 0;
    this.wait_ps6eex$_0 = 0;
    this.health_hwe64u$_0 = 0;
    this.minSal_dgncda$_0 = 0;
    this.gasSal_y7izx3$_0 = 0;
    this.nrgSal_5daz8z$_0 = 0;
  }
  Object.defineProperty(BlankTile.prototype, 'loc', {
    get: function () {
      return this.loc_7p7skm$_0;
    },
    set: function (loc) {
      this.loc_7p7skm$_0 = loc;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'occ', {
    get: function () {
      return this.occ_7p9gmv$_0;
    },
    set: function (occ) {
      this.occ_7p9gmv$_0 = occ;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'use', {
    get: function () {
      return this.use_7pdmgv$_0;
    },
    set: function (use) {
      this.use_7pdmgv$_0 = use;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'drive', {
    get: function () {
      return this.drive_96rk9o$_0;
    },
    set: function (drive) {
      this.drive_96rk9o$_0 = drive;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'traverse', {
    get: function () {
      return this.traverse_896cyk$_0;
    },
    set: function (traverse) {
      this.traverse_896cyk$_0 = traverse;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'owner', {
    get: function () {
      return this.owner_eh387n$_0;
    },
    set: function (owner) {
      this.owner_eh387n$_0 = owner;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'blank', {
    get: function () {
      return this.blank_858a8i$_0;
    },
    set: function (blank) {
      this.blank_858a8i$_0 = blank;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'icon', {
    get: function () {
      return this.icon_pkiodx$_0;
    },
    set: function (icon) {
      this.icon_pkiodx$_0 = icon;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'minCost', {
    get: function () {
      return this.minCost_8m13d3$_0;
    },
    set: function (minCost) {
      this.minCost_8m13d3$_0 = minCost;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'gasCost', {
    get: function () {
      return this.gasCost_4qsb34$_0;
    },
    set: function (gasCost) {
      this.gasCost_4qsb34$_0 = gasCost;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'nrgCost', {
    get: function () {
      return this.nrgCost_o5onpy$_0;
    },
    set: function (nrgCost) {
      this.nrgCost_o5onpy$_0 = nrgCost;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'wait', {
    get: function () {
      return this.wait_ps6eex$_0;
    },
    set: function (wait) {
      this.wait_ps6eex$_0 = wait;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'health', {
    get: function () {
      return this.health_hwe64u$_0;
    },
    set: function (health) {
      this.health_hwe64u$_0 = health;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'minSal', {
    get: function () {
      return this.minSal_dgncda$_0;
    },
    set: function (minSal) {
      this.minSal_dgncda$_0 = minSal;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'gasSal', {
    get: function () {
      return this.gasSal_y7izx3$_0;
    },
    set: function (gasSal) {
      this.gasSal_y7izx3$_0 = gasSal;
    }
  });
  Object.defineProperty(BlankTile.prototype, 'nrgSal', {
    get: function () {
      return this.nrgSal_5daz8z$_0;
    },
    set: function (nrgSal) {
      this.nrgSal_5daz8z$_0 = nrgSal;
    }
  });
  BlankTile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlankTile',
    interfaces: [Tile]
  };
  function Builder() {
    Unit.call(this);
    this.occ_68leq$_0 = true;
    this.traverse_j5h963$_0 = false;
    this.minCost_nrm5f2$_0 = 50;
    this.gasCost_jwdd53$_0 = 20;
    this.nrgCost_vpuc77$_0 = 0;
    this.commands_63q1a7$_0 = mutableListOf(['Build a Factory (200, 100, 0)', 'Abort']);
    this.health_88udxx$_0 = 20;
    this.minSal_3t3k6d$_0 = 0;
    this.gasSal_ojz7q6$_0 = 0;
    this.nrgSal_f0urfw$_0 = 0;
  }
  Object.defineProperty(Builder.prototype, 'occ', {
    get: function () {
      return this.occ_68leq$_0;
    },
    set: function (occ) {
      this.occ_68leq$_0 = occ;
    }
  });
  Object.defineProperty(Builder.prototype, 'traverse', {
    get: function () {
      return this.traverse_j5h963$_0;
    },
    set: function (traverse) {
      this.traverse_j5h963$_0 = traverse;
    }
  });
  Object.defineProperty(Builder.prototype, 'minCost', {
    get: function () {
      return this.minCost_nrm5f2$_0;
    },
    set: function (minCost) {
      this.minCost_nrm5f2$_0 = minCost;
    }
  });
  Object.defineProperty(Builder.prototype, 'gasCost', {
    get: function () {
      return this.gasCost_jwdd53$_0;
    },
    set: function (gasCost) {
      this.gasCost_jwdd53$_0 = gasCost;
    }
  });
  Object.defineProperty(Builder.prototype, 'nrgCost', {
    get: function () {
      return this.nrgCost_vpuc77$_0;
    },
    set: function (nrgCost) {
      this.nrgCost_vpuc77$_0 = nrgCost;
    }
  });
  Object.defineProperty(Builder.prototype, 'commands', {
    get: function () {
      return this.commands_63q1a7$_0;
    },
    set: function (commands) {
      this.commands_63q1a7$_0 = commands;
    }
  });
  Object.defineProperty(Builder.prototype, 'health', {
    get: function () {
      return this.health_88udxx$_0;
    },
    set: function (health) {
      this.health_88udxx$_0 = health;
    }
  });
  Object.defineProperty(Builder.prototype, 'minSal', {
    get: function () {
      return this.minSal_3t3k6d$_0;
    },
    set: function (minSal) {
      this.minSal_3t3k6d$_0 = minSal;
    }
  });
  Object.defineProperty(Builder.prototype, 'gasSal', {
    get: function () {
      return this.gasSal_ojz7q6$_0;
    },
    set: function (gasSal) {
      this.gasSal_ojz7q6$_0 = gasSal;
    }
  });
  Object.defineProperty(Builder.prototype, 'nrgSal', {
    get: function () {
      return this.nrgSal_f0urfw$_0;
    },
    set: function (nrgSal) {
      this.nrgSal_f0urfw$_0 = nrgSal;
    }
  });
  Builder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Builder',
    interfaces: [Unit]
  };
  function Building() {
    RealTile.call(this);
    this.occ_66fsh1$_0 = true;
    this.drive_xp1bxy$_0 = false;
    this.traverse_uktege$_0 = false;
    this.minSal_6qlylw$_0 = 0;
    this.gasSal_e09oxx$_0 = 0;
    this.nrgSal_pkka85$_0 = 0;
  }
  Object.defineProperty(Building.prototype, 'occ', {
    get: function () {
      return this.occ_66fsh1$_0;
    },
    set: function (occ) {
      this.occ_66fsh1$_0 = occ;
    }
  });
  Object.defineProperty(Building.prototype, 'drive', {
    get: function () {
      return this.drive_xp1bxy$_0;
    },
    set: function (drive) {
      this.drive_xp1bxy$_0 = drive;
    }
  });
  Object.defineProperty(Building.prototype, 'traverse', {
    get: function () {
      return this.traverse_uktege$_0;
    },
    set: function (traverse) {
      this.traverse_uktege$_0 = traverse;
    }
  });
  Object.defineProperty(Building.prototype, 'minSal', {
    get: function () {
      return this.minSal_6qlylw$_0;
    },
    set: function (minSal) {
      this.minSal_6qlylw$_0 = minSal;
    }
  });
  Object.defineProperty(Building.prototype, 'gasSal', {
    get: function () {
      return this.gasSal_e09oxx$_0;
    },
    set: function (gasSal) {
      this.gasSal_e09oxx$_0 = gasSal;
    }
  });
  Object.defineProperty(Building.prototype, 'nrgSal', {
    get: function () {
      return this.nrgSal_pkka85$_0;
    },
    set: function (nrgSal) {
      this.nrgSal_pkka85$_0 = nrgSal;
    }
  });
  Building.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Building',
    interfaces: [RealTile]
  };
  function EBuilder(location) {
    Builder.call(this);
    this.loc_k61iz6$_0 = location;
    this.use_k67cvf$_0 = true;
    this.drive_dvjv08$_0 = true;
    this.owner_8l8729$_0 = 2;
    this.icon_e4jwxj$_0 = 'eB';
  }
  Object.defineProperty(EBuilder.prototype, 'loc', {
    get: function () {
      return this.loc_k61iz6$_0;
    },
    set: function (loc) {
      this.loc_k61iz6$_0 = loc;
    }
  });
  Object.defineProperty(EBuilder.prototype, 'use', {
    get: function () {
      return this.use_k67cvf$_0;
    },
    set: function (use) {
      this.use_k67cvf$_0 = use;
    }
  });
  Object.defineProperty(EBuilder.prototype, 'drive', {
    get: function () {
      return this.drive_dvjv08$_0;
    },
    set: function (drive) {
      this.drive_dvjv08$_0 = drive;
    }
  });
  Object.defineProperty(EBuilder.prototype, 'owner', {
    get: function () {
      return this.owner_8l8729$_0;
    },
    set: function (owner) {
      this.owner_8l8729$_0 = owner;
    }
  });
  Object.defineProperty(EBuilder.prototype, 'icon', {
    get: function () {
      return this.icon_e4jwxj$_0;
    },
    set: function (icon) {
      this.icon_e4jwxj$_0 = icon;
    }
  });
  EBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EBuilder',
    interfaces: [Builder]
  };
  function EFactory(location) {
    Factory.call(this);
    this.loc_8segn1$_0 = location;
    this.use_8s8mqs$_0 = true;
    this.owner_823jsg$_0 = 2;
    this.icon_bm54mw$_0 = 'eF';
  }
  Object.defineProperty(EFactory.prototype, 'loc', {
    get: function () {
      return this.loc_8segn1$_0;
    },
    set: function (loc) {
      this.loc_8segn1$_0 = loc;
    }
  });
  Object.defineProperty(EFactory.prototype, 'use', {
    get: function () {
      return this.use_8s8mqs$_0;
    },
    set: function (use) {
      this.use_8s8mqs$_0 = use;
    }
  });
  Object.defineProperty(EFactory.prototype, 'owner', {
    get: function () {
      return this.owner_823jsg$_0;
    },
    set: function (owner) {
      this.owner_823jsg$_0 = owner;
    }
  });
  Object.defineProperty(EFactory.prototype, 'icon', {
    get: function () {
      return this.icon_bm54mw$_0;
    },
    set: function (icon) {
      this.icon_bm54mw$_0 = icon;
    }
  });
  EFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EFactory',
    interfaces: [Factory]
  };
  function EGasCollector(location) {
    GasCollector.call(this);
    this.loc_jgchf3$_0 = location;
    this.use_jgibbc$_0 = true;
    this.owner_fsdrks$_0 = 2;
    this.icon_yrzsr0$_0 = 'eGC';
  }
  Object.defineProperty(EGasCollector.prototype, 'loc', {
    get: function () {
      return this.loc_jgchf3$_0;
    },
    set: function (loc) {
      this.loc_jgchf3$_0 = loc;
    }
  });
  Object.defineProperty(EGasCollector.prototype, 'use', {
    get: function () {
      return this.use_jgibbc$_0;
    },
    set: function (use) {
      this.use_jgibbc$_0 = use;
    }
  });
  Object.defineProperty(EGasCollector.prototype, 'owner', {
    get: function () {
      return this.owner_fsdrks$_0;
    },
    set: function (owner) {
      this.owner_fsdrks$_0 = owner;
    }
  });
  Object.defineProperty(EGasCollector.prototype, 'icon', {
    get: function () {
      return this.icon_yrzsr0$_0;
    },
    set: function (icon) {
      this.icon_yrzsr0$_0 = icon;
    }
  });
  EGasCollector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EGasCollector',
    interfaces: [GasCollector]
  };
  function EHQ(location) {
    HQ.call(this);
    this.loc_ucq0uy$_0 = location;
    this.use_ucvur7$_0 = true;
    this.owner_miued5$_0 = 2;
    this.icon_hi39j5$_0 = 'eHQ';
  }
  Object.defineProperty(EHQ.prototype, 'loc', {
    get: function () {
      return this.loc_ucq0uy$_0;
    },
    set: function (loc) {
      this.loc_ucq0uy$_0 = loc;
    }
  });
  Object.defineProperty(EHQ.prototype, 'use', {
    get: function () {
      return this.use_ucvur7$_0;
    },
    set: function (use) {
      this.use_ucvur7$_0 = use;
    }
  });
  Object.defineProperty(EHQ.prototype, 'owner', {
    get: function () {
      return this.owner_miued5$_0;
    },
    set: function (owner) {
      this.owner_miued5$_0 = owner;
    }
  });
  Object.defineProperty(EHQ.prototype, 'icon', {
    get: function () {
      return this.icon_hi39j5$_0;
    },
    set: function (icon) {
      this.icon_hi39j5$_0 = icon;
    }
  });
  EHQ.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EHQ',
    interfaces: [HQ]
  };
  function ENRGPlant(location) {
    NRGPlant.call(this);
    this.loc_57jqvv$_0 = location;
    this.use_57pks4$_0 = true;
    this.owner_z540ag$_0 = 2;
    this.icon_jdxa1s$_0 = 'eP';
  }
  Object.defineProperty(ENRGPlant.prototype, 'loc', {
    get: function () {
      return this.loc_57jqvv$_0;
    },
    set: function (loc) {
      this.loc_57jqvv$_0 = loc;
    }
  });
  Object.defineProperty(ENRGPlant.prototype, 'use', {
    get: function () {
      return this.use_57pks4$_0;
    },
    set: function (use) {
      this.use_57pks4$_0 = use;
    }
  });
  Object.defineProperty(ENRGPlant.prototype, 'owner', {
    get: function () {
      return this.owner_z540ag$_0;
    },
    set: function (owner) {
      this.owner_z540ag$_0 = owner;
    }
  });
  Object.defineProperty(ENRGPlant.prototype, 'icon', {
    get: function () {
      return this.icon_jdxa1s$_0;
    },
    set: function (icon) {
      this.icon_jdxa1s$_0 = icon;
    }
  });
  ENRGPlant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ENRGPlant',
    interfaces: [NRGPlant]
  };
  function ESoldier(location) {
    Soldier.call(this);
    this.loc_v0b5md$_0 = location;
    this.use_v05bq4$_0 = true;
    this.drive_tyxj7l$_0 = true;
    this.owner_z9975k$_0 = 2;
    this.icon_x445yo$_0 = 'eS';
  }
  Object.defineProperty(ESoldier.prototype, 'loc', {
    get: function () {
      return this.loc_v0b5md$_0;
    },
    set: function (loc) {
      this.loc_v0b5md$_0 = loc;
    }
  });
  Object.defineProperty(ESoldier.prototype, 'use', {
    get: function () {
      return this.use_v05bq4$_0;
    },
    set: function (use) {
      this.use_v05bq4$_0 = use;
    }
  });
  Object.defineProperty(ESoldier.prototype, 'drive', {
    get: function () {
      return this.drive_tyxj7l$_0;
    },
    set: function (drive) {
      this.drive_tyxj7l$_0 = drive;
    }
  });
  Object.defineProperty(ESoldier.prototype, 'owner', {
    get: function () {
      return this.owner_z9975k$_0;
    },
    set: function (owner) {
      this.owner_z9975k$_0 = owner;
    }
  });
  Object.defineProperty(ESoldier.prototype, 'icon', {
    get: function () {
      return this.icon_x445yo$_0;
    },
    set: function (icon) {
      this.icon_x445yo$_0 = icon;
    }
  });
  ESoldier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ESoldier',
    interfaces: [Soldier]
  };
  function EWorker(location) {
    Worker.call(this);
    this.loc_mpqecb$_0 = location;
    this.use_mpkkg2$_0 = true;
    this.drive_q6ogkl$_0 = true;
    this.owner_kwcsmm$_0 = 2;
    this.icon_63jfpy$_0 = 'eW';
  }
  Object.defineProperty(EWorker.prototype, 'loc', {
    get: function () {
      return this.loc_mpqecb$_0;
    },
    set: function (loc) {
      this.loc_mpqecb$_0 = loc;
    }
  });
  Object.defineProperty(EWorker.prototype, 'use', {
    get: function () {
      return this.use_mpkkg2$_0;
    },
    set: function (use) {
      this.use_mpkkg2$_0 = use;
    }
  });
  Object.defineProperty(EWorker.prototype, 'drive', {
    get: function () {
      return this.drive_q6ogkl$_0;
    },
    set: function (drive) {
      this.drive_q6ogkl$_0 = drive;
    }
  });
  Object.defineProperty(EWorker.prototype, 'owner', {
    get: function () {
      return this.owner_kwcsmm$_0;
    },
    set: function (owner) {
      this.owner_kwcsmm$_0 = owner;
    }
  });
  Object.defineProperty(EWorker.prototype, 'icon', {
    get: function () {
      return this.icon_63jfpy$_0;
    },
    set: function (icon) {
      this.icon_63jfpy$_0 = icon;
    }
  });
  EWorker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EWorker',
    interfaces: [Worker]
  };
  function Factory() {
    Building.call(this);
    this.minCost_ujafmp$_0 = 200;
    this.gasCost_yej7wo$_0 = 100;
    this.nrgCost_ezmv9u$_0 = 0;
    this.commands_rgd86m$_0 = mutableListOf(['Create a Builder (50, 20, 0)', 'Create a Worker (20, 10, 0)', 'Abort']);
    this.health_amhcnu$_0 = 100;
  }
  Object.defineProperty(Factory.prototype, 'minCost', {
    get: function () {
      return this.minCost_ujafmp$_0;
    },
    set: function (minCost) {
      this.minCost_ujafmp$_0 = minCost;
    }
  });
  Object.defineProperty(Factory.prototype, 'gasCost', {
    get: function () {
      return this.gasCost_yej7wo$_0;
    },
    set: function (gasCost) {
      this.gasCost_yej7wo$_0 = gasCost;
    }
  });
  Object.defineProperty(Factory.prototype, 'nrgCost', {
    get: function () {
      return this.nrgCost_ezmv9u$_0;
    },
    set: function (nrgCost) {
      this.nrgCost_ezmv9u$_0 = nrgCost;
    }
  });
  Object.defineProperty(Factory.prototype, 'commands', {
    get: function () {
      return this.commands_rgd86m$_0;
    },
    set: function (commands) {
      this.commands_rgd86m$_0 = commands;
    }
  });
  Object.defineProperty(Factory.prototype, 'health', {
    get: function () {
      return this.health_amhcnu$_0;
    },
    set: function (health) {
      this.health_amhcnu$_0 = health;
    }
  });
  Factory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Factory',
    interfaces: [Building]
  };
  function GameData(diff) {
    this.minerals = 0;
    this.gas = 0;
    this.nrg = 0;
    if (diff === -1) {
      this.minerals = 999999;
      this.gas = 999999;
      this.nrg = 999999;
    }if (diff === 0) {
      this.minerals = 200;
      this.gas = 200;
      this.nrg = 200;
    }}
  GameData.prototype.addResource_qt1dr2$ = function (minDiff, gasDiff, nrgDiff) {
    this.minerals = this.minerals + minDiff | 0;
    this.gas = this.gas + gasDiff | 0;
    this.nrg = this.nrg + nrgDiff | 0;
  };
  GameData.prototype.subResource_qt1dr2$ = function (minDiff, gasDiff, nrgDiff) {
    this.minerals = this.minerals - minDiff | 0;
    this.gas = this.gas - gasDiff | 0;
    this.nrg = this.nrg - nrgDiff | 0;
  };
  GameData.prototype.getResources = function () {
    return mutableListOf([this.minerals, this.gas, this.nrg]);
  };
  GameData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameData',
    interfaces: []
  };
  function GasCollector() {
    Building.call(this);
    this.minCost_pte157$_0 = 0;
    this.gasCost_tomtf6$_0 = 0;
    this.nrgCost_a9qgsc$_0 = 0;
    this.commands_vp1law$_0 = mutableListOf(['Abort']);
    this.health_59g724$_0 = 100;
  }
  Object.defineProperty(GasCollector.prototype, 'minCost', {
    get: function () {
      return this.minCost_pte157$_0;
    },
    set: function (minCost) {
      this.minCost_pte157$_0 = minCost;
    }
  });
  Object.defineProperty(GasCollector.prototype, 'gasCost', {
    get: function () {
      return this.gasCost_tomtf6$_0;
    },
    set: function (gasCost) {
      this.gasCost_tomtf6$_0 = gasCost;
    }
  });
  Object.defineProperty(GasCollector.prototype, 'nrgCost', {
    get: function () {
      return this.nrgCost_a9qgsc$_0;
    },
    set: function (nrgCost) {
      this.nrgCost_a9qgsc$_0 = nrgCost;
    }
  });
  Object.defineProperty(GasCollector.prototype, 'commands', {
    get: function () {
      return this.commands_vp1law$_0;
    },
    set: function (commands) {
      this.commands_vp1law$_0 = commands;
    }
  });
  Object.defineProperty(GasCollector.prototype, 'health', {
    get: function () {
      return this.health_59g724$_0;
    },
    set: function (health) {
      this.health_59g724$_0 = health;
    }
  });
  GasCollector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GasCollector',
    interfaces: [Building]
  };
  function GasVent(location) {
    Resource.call(this);
    this.loc_srcqhy$_0 = location;
    this.icon_vsn4sh$_0 = 'GV';
    this.health_1mwvia$_0 = 1000000;
    this.minSal_2sty9a$_0 = 0;
    this.gasSal_hy1paj$_0 = 1;
    this.nrgSal_lms9vj$_0 = 0;
  }
  Object.defineProperty(GasVent.prototype, 'loc', {
    get: function () {
      return this.loc_srcqhy$_0;
    },
    set: function (loc) {
      this.loc_srcqhy$_0 = loc;
    }
  });
  Object.defineProperty(GasVent.prototype, 'icon', {
    get: function () {
      return this.icon_vsn4sh$_0;
    },
    set: function (icon) {
      this.icon_vsn4sh$_0 = icon;
    }
  });
  Object.defineProperty(GasVent.prototype, 'health', {
    get: function () {
      return this.health_1mwvia$_0;
    },
    set: function (health) {
      this.health_1mwvia$_0 = health;
    }
  });
  Object.defineProperty(GasVent.prototype, 'minSal', {
    get: function () {
      return this.minSal_2sty9a$_0;
    },
    set: function (minSal) {
      this.minSal_2sty9a$_0 = minSal;
    }
  });
  Object.defineProperty(GasVent.prototype, 'gasSal', {
    get: function () {
      return this.gasSal_hy1paj$_0;
    },
    set: function (gasSal) {
      this.gasSal_hy1paj$_0 = gasSal;
    }
  });
  Object.defineProperty(GasVent.prototype, 'nrgSal', {
    get: function () {
      return this.nrgSal_lms9vj$_0;
    },
    set: function (nrgSal) {
      this.nrgSal_lms9vj$_0 = nrgSal;
    }
  });
  GasVent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GasVent',
    interfaces: [Resource]
  };
  function GrassTile(location) {
    RealTile.call(this);
    this.loc_optjgc$_0 = location;
    this.occ_oprve3$_0 = false;
    this.use_opnpk3$_0 = false;
    this.drive_woifra$_0 = false;
    this.traverse_39tu6a$_0 = true;
    this.owner_re6rtb$_0 = 0;
    this.icon_f1y387$_0 = 'G';
    this.minCost_nu6jtn$_0 = 0;
    this.gasCost_rpfc3m$_0 = 0;
    this.nrgCost_8aizgs$_0 = 0;
    this.health_xr4ul0$_0 = 0;
    this.minSal_wu8dmk$_0 = 0;
    this.gasSal_hg00sr$_0 = 0;
    this.nrgSal_e0a20b$_0 = 0;
  }
  Object.defineProperty(GrassTile.prototype, 'loc', {
    get: function () {
      return this.loc_optjgc$_0;
    },
    set: function (loc) {
      this.loc_optjgc$_0 = loc;
    }
  });
  Object.defineProperty(GrassTile.prototype, 'occ', {
    get: function () {
      return this.occ_oprve3$_0;
    },
    set: function (occ) {
      this.occ_oprve3$_0 = occ;
    }
  });
  Object.defineProperty(GrassTile.prototype, 'use', {
    get: function () {
      return this.use_opnpk3$_0;
    },
    set: function (use) {
      this.use_opnpk3$_0 = use;
    }
  });
  Object.defineProperty(GrassTile.prototype, 'drive', {
    get: function () {
      return this.drive_woifra$_0;
    },
    set: function (drive) {
      this.drive_woifra$_0 = drive;
    }
  });
  Object.defineProperty(GrassTile.prototype, 'traverse', {
    get: function () {
      return this.traverse_39tu6a$_0;
    },
    set: function (traverse) {
      this.traverse_39tu6a$_0 = traverse;
    }
  });
  Object.defineProperty(GrassTile.prototype, 'owner', {
    get: function () {
      return this.owner_re6rtb$_0;
    },
    set: function (owner) {
      this.owner_re6rtb$_0 = owner;
    }
  });
  Object.defineProperty(GrassTile.prototype, 'icon', {
    get: function () {
      return this.icon_f1y387$_0;
    },
    set: function (icon) {
      this.icon_f1y387$_0 = icon;
    }
  });
  Object.defineProperty(GrassTile.prototype, 'minCost', {
    get: function () {
      return this.minCost_nu6jtn$_0;
    },
    set: function (minCost) {
      this.minCost_nu6jtn$_0 = minCost;
    }
  });
  Object.defineProperty(GrassTile.prototype, 'gasCost', {
    get: function () {
      return this.gasCost_rpfc3m$_0;
    },
    set: function (gasCost) {
      this.gasCost_rpfc3m$_0 = gasCost;
    }
  });
  Object.defineProperty(GrassTile.prototype, 'nrgCost', {
    get: function () {
      return this.nrgCost_8aizgs$_0;
    },
    set: function (nrgCost) {
      this.nrgCost_8aizgs$_0 = nrgCost;
    }
  });
  Object.defineProperty(GrassTile.prototype, 'health', {
    get: function () {
      return this.health_xr4ul0$_0;
    },
    set: function (health) {
      this.health_xr4ul0$_0 = health;
    }
  });
  Object.defineProperty(GrassTile.prototype, 'minSal', {
    get: function () {
      return this.minSal_wu8dmk$_0;
    },
    set: function (minSal) {
      this.minSal_wu8dmk$_0 = minSal;
    }
  });
  Object.defineProperty(GrassTile.prototype, 'gasSal', {
    get: function () {
      return this.gasSal_hg00sr$_0;
    },
    set: function (gasSal) {
      this.gasSal_hg00sr$_0 = gasSal;
    }
  });
  Object.defineProperty(GrassTile.prototype, 'nrgSal', {
    get: function () {
      return this.nrgSal_e0a20b$_0;
    },
    set: function (nrgSal) {
      this.nrgSal_e0a20b$_0 = nrgSal;
    }
  });
  GrassTile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GrassTile',
    interfaces: [RealTile]
  };
  function GrassUnits() {
    this.size = 31;
    this.nullLocation_0 = new Location(-1, -1);
    this.bla_0 = new BlankTile(this.nullLocation_0);
    this.pHQ_0 = new PHQ(this.nullLocation_0);
    this.pBu_0 = new PBuilder(this.nullLocation_0);
    this.pWo_0 = new PWorker(this.nullLocation_0);
    this.pSo_0 = new PSoldier(this.nullLocation_0);
    this.eHQ_0 = new EHQ(this.nullLocation_0);
    this.eBu_0 = new EBuilder(this.nullLocation_0);
    this.eWo_0 = new EWorker(this.nullLocation_0);
    this.eSo_0 = new ESoldier(this.nullLocation_0);
    this.tiles = ArrayList_init();
    this.setupMap();
  }
  GrassUnits.prototype.setupMap = function () {
    var tmp$, tmp$_0;
    var row01 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row02 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row03 = mutableListOf([this.bla_0, this.bla_0, this.pHQ_0, this.bla_0, this.pWo_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row04 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row05 = mutableListOf([this.bla_0, this.bla_0, this.pBu_0, this.bla_0, this.pSo_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row06 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row07 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row08 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row09 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row10 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row11 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row12 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row13 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row14 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row15 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row16 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row17 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row18 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row19 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row20 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row21 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row22 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row23 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row24 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row25 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row26 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row27 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.eSo_0, this.bla_0, this.eBu_0, this.bla_0, this.bla_0]);
    var row28 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row29 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.eWo_0, this.bla_0, this.eHQ_0, this.bla_0, this.bla_0]);
    var row30 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    var row31 = mutableListOf([this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0, this.bla_0]);
    this.tiles.add_11rb$(row01);
    this.tiles.add_11rb$(row02);
    this.tiles.add_11rb$(row03);
    this.tiles.add_11rb$(row04);
    this.tiles.add_11rb$(row05);
    this.tiles.add_11rb$(row06);
    this.tiles.add_11rb$(row07);
    this.tiles.add_11rb$(row08);
    this.tiles.add_11rb$(row09);
    this.tiles.add_11rb$(row10);
    this.tiles.add_11rb$(row11);
    this.tiles.add_11rb$(row12);
    this.tiles.add_11rb$(row13);
    this.tiles.add_11rb$(row14);
    this.tiles.add_11rb$(row15);
    this.tiles.add_11rb$(row16);
    this.tiles.add_11rb$(row17);
    this.tiles.add_11rb$(row18);
    this.tiles.add_11rb$(row19);
    this.tiles.add_11rb$(row20);
    this.tiles.add_11rb$(row21);
    this.tiles.add_11rb$(row22);
    this.tiles.add_11rb$(row23);
    this.tiles.add_11rb$(row24);
    this.tiles.add_11rb$(row25);
    this.tiles.add_11rb$(row26);
    this.tiles.add_11rb$(row27);
    this.tiles.add_11rb$(row28);
    this.tiles.add_11rb$(row29);
    this.tiles.add_11rb$(row30);
    this.tiles.add_11rb$(row31);
    tmp$ = this.size;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.size;
      for (var j = 0; j < tmp$_0; j++) {
        var location = new Location(i, j);
        this.tiles.get_za3lpa$(i).get_za3lpa$(j).loc = location;
      }
    }
  };
  GrassUnits.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GrassUnits',
    interfaces: []
  };
  function GrassWorld() {
    this.size = 31;
    this.nullLocation_0 = new Location(-1, -1);
    this.gra_0 = new GrassTile(this.nullLocation_0);
    this.wat_0 = new Water(this.nullLocation_0);
    this.min_0 = new Minerals(this.nullLocation_0);
    this.gas_0 = new GasVent(this.nullLocation_0);
    this.tiles = ArrayList_init();
    this.setupMap();
  }
  GrassWorld.prototype.setupMap = function () {
    var tmp$, tmp$_0;
    var row01 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row02 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row03 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row04 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row05 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row06 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.min_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row07 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.min_0, this.min_0, this.min_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row08 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row09 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row10 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row11 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row12 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gas_0, this.gra_0, this.gra_0]);
    var row13 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gas_0, this.gra_0, this.gra_0, this.gra_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row14 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.min_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row15 = mutableListOf([this.gra_0, this.gra_0, this.gas_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.min_0, this.min_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.gra_0, this.gra_0, this.gas_0, this.gra_0, this.gra_0, this.gra_0]);
    var row16 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gas_0, this.gra_0, this.gra_0, this.min_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.min_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row17 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.min_0, this.min_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row18 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.min_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row19 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gas_0, this.gra_0, this.gra_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gas_0, this.gra_0]);
    var row20 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row21 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row22 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row23 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row24 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.wat_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row25 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.min_0, this.min_0, this.min_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row26 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.min_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row27 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row28 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row29 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row30 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    var row31 = mutableListOf([this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0, this.gra_0]);
    this.tiles.add_11rb$(row01);
    this.tiles.add_11rb$(row02);
    this.tiles.add_11rb$(row03);
    this.tiles.add_11rb$(row04);
    this.tiles.add_11rb$(row05);
    this.tiles.add_11rb$(row06);
    this.tiles.add_11rb$(row07);
    this.tiles.add_11rb$(row08);
    this.tiles.add_11rb$(row09);
    this.tiles.add_11rb$(row10);
    this.tiles.add_11rb$(row11);
    this.tiles.add_11rb$(row12);
    this.tiles.add_11rb$(row13);
    this.tiles.add_11rb$(row14);
    this.tiles.add_11rb$(row15);
    this.tiles.add_11rb$(row16);
    this.tiles.add_11rb$(row17);
    this.tiles.add_11rb$(row18);
    this.tiles.add_11rb$(row19);
    this.tiles.add_11rb$(row20);
    this.tiles.add_11rb$(row21);
    this.tiles.add_11rb$(row22);
    this.tiles.add_11rb$(row23);
    this.tiles.add_11rb$(row24);
    this.tiles.add_11rb$(row25);
    this.tiles.add_11rb$(row26);
    this.tiles.add_11rb$(row27);
    this.tiles.add_11rb$(row28);
    this.tiles.add_11rb$(row29);
    this.tiles.add_11rb$(row30);
    this.tiles.add_11rb$(row31);
    tmp$ = this.size;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.size;
      for (var j = 0; j < tmp$_0; j++) {
        var location = new Location(i, j);
        this.tiles.get_za3lpa$(i).get_za3lpa$(j).loc = location;
      }
    }
  };
  GrassWorld.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GrassWorld',
    interfaces: []
  };
  function HQ() {
    Building.call(this);
    this.minCost_ym7cps$_0 = 0;
    this.gasCost_uqykft$_0 = 0;
    this.nrgCost_kv94wh$_0 = 0;
    this.commands_cpkycz$_0 = mutableListOf(['Abort']);
    this.health_xcj3p5$_0 = 200;
  }
  Object.defineProperty(HQ.prototype, 'minCost', {
    get: function () {
      return this.minCost_ym7cps$_0;
    },
    set: function (minCost) {
      this.minCost_ym7cps$_0 = minCost;
    }
  });
  Object.defineProperty(HQ.prototype, 'gasCost', {
    get: function () {
      return this.gasCost_uqykft$_0;
    },
    set: function (gasCost) {
      this.gasCost_uqykft$_0 = gasCost;
    }
  });
  Object.defineProperty(HQ.prototype, 'nrgCost', {
    get: function () {
      return this.nrgCost_kv94wh$_0;
    },
    set: function (nrgCost) {
      this.nrgCost_kv94wh$_0 = nrgCost;
    }
  });
  Object.defineProperty(HQ.prototype, 'commands', {
    get: function () {
      return this.commands_cpkycz$_0;
    },
    set: function (commands) {
      this.commands_cpkycz$_0 = commands;
    }
  });
  Object.defineProperty(HQ.prototype, 'health', {
    get: function () {
      return this.health_xcj3p5$_0;
    },
    set: function (health) {
      this.health_xcj3p5$_0 = health;
    }
  });
  HQ.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HQ',
    interfaces: [Building]
  };
  function ITile() {
  }
  ITile.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ITile',
    interfaces: []
  };
  function Location(row, col) {
    this.row = row;
    this.col = col;
  }
  Location.prototype.setLoc_vux9f0$ = function (row, col) {
    this.row = row;
    this.col = col;
  };
  Location.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Location',
    interfaces: []
  };
  function Map(size) {
    this.size = size;
    this.tiles = ArrayList_init();
    this.clearMap();
  }
  Map.prototype.clearMap = function () {
    var tmp$, tmp$_0;
    tmp$ = this.size;
    for (var i = 0; i < tmp$; i++) {
      var row = ArrayList_init();
      tmp$_0 = this.size;
      for (var j = 0; j < tmp$_0; j++) {
        var location = new Location(i, j);
        var blank = new BlankTile(location);
        row.add_11rb$(blank);
      }
      this.tiles.add_11rb$(row);
    }
  };
  Map.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Map',
    interfaces: []
  };
  function Minerals(location) {
    Resource.call(this);
    this.loc_j14jz5$_0 = location;
    this.icon_lrviw4$_0 = 'M';
    this.health_f1opcp$_0 = 50;
    this.minSal_jhfj49$_0 = 10;
    this.gasSal_19g4fk$_0 = 0;
    this.nrgSal_wpq78m$_0 = 0;
  }
  Object.defineProperty(Minerals.prototype, 'loc', {
    get: function () {
      return this.loc_j14jz5$_0;
    },
    set: function (loc) {
      this.loc_j14jz5$_0 = loc;
    }
  });
  Object.defineProperty(Minerals.prototype, 'icon', {
    get: function () {
      return this.icon_lrviw4$_0;
    },
    set: function (icon) {
      this.icon_lrviw4$_0 = icon;
    }
  });
  Object.defineProperty(Minerals.prototype, 'health', {
    get: function () {
      return this.health_f1opcp$_0;
    },
    set: function (health) {
      this.health_f1opcp$_0 = health;
    }
  });
  Object.defineProperty(Minerals.prototype, 'minSal', {
    get: function () {
      return this.minSal_jhfj49$_0;
    },
    set: function (minSal) {
      this.minSal_jhfj49$_0 = minSal;
    }
  });
  Object.defineProperty(Minerals.prototype, 'gasSal', {
    get: function () {
      return this.gasSal_19g4fk$_0;
    },
    set: function (gasSal) {
      this.gasSal_19g4fk$_0 = gasSal;
    }
  });
  Object.defineProperty(Minerals.prototype, 'nrgSal', {
    get: function () {
      return this.nrgSal_wpq78m$_0;
    },
    set: function (nrgSal) {
      this.nrgSal_wpq78m$_0 = nrgSal;
    }
  });
  Minerals.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Minerals',
    interfaces: [Resource]
  };
  function Model(width, height, diff) {
    this.width_0 = width;
    this.height_0 = height;
    this.diff_0 = diff;
    this.world_0 = new GrassWorld();
    this.size_0 = this.world_0.size;
    this.units_0 = new GrassUnits();
    this.combined_0 = new Map(this.size_0);
    this.buffer_0 = new Map(this.width_0);
    this.playerUnits_0 = new PlayerUnits();
    this.playerBuildings_0 = new PlayerBuildings();
    this.enemyUnits_0 = ArrayList_init();
    this.enemyMovesQueue_0 = ArrayList_init();
    this.playerMovesQueue_0 = ArrayList_init();
    this.playerBuildQueue_0 = ArrayList_init();
    this.playerCreationQueue_0 = ArrayList_init();
    this.playerGatherQueue_0 = ArrayList_init();
    this.playerData_0 = new GameData(this.diff_0);
    this.viewscreen_0 = new Location(this.size_0 / 2 | 0, this.size_0 / 2 | 0);
    this.gameWon_0 = 0;
    this.setupUnits_0();
    this.setupBuildings_0();
    this.updateView_1(5, 5);
  }
  Model.prototype.setupUnits_0 = function () {
    var tmp$, tmp$_0;
    tmp$ = this.size_0;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.size_0;
      for (var j = 0; j < tmp$_0; j++) {
        var unit = this.units_0.tiles.get_za3lpa$(j).get_za3lpa$(i);
        if (unit.owner === 1) {
          this.playerUnits_0.units.add_11rb$(unit);
        } else if (unit.owner === 2) {
          this.enemyUnits_0.add_11rb$(unit);
        }}
    }
  };
  Model.prototype.setupBuildings_0 = function () {
    var tmp$, tmp$_0;
    tmp$ = this.size_0;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.size_0;
      for (var j = 0; j < tmp$_0; j++) {
        var building = this.world_0.tiles.get_za3lpa$(j).get_za3lpa$(i);
        if (building.owner === 1) {
          this.playerBuildings_0.units.add_11rb$(building);
        } else
          building.owner;
      }
    }
  };
  Model.prototype.getViewScreen = function () {
    return mutableListOf([this.viewscreen_0.row, this.viewscreen_0.col]);
  };
  Model.prototype.moveViewUp = function () {
    return this.updateViewDiff_0(-1, 0);
  };
  Model.prototype.moveViewDown = function () {
    return this.updateViewDiff_0(1, 0);
  };
  Model.prototype.moveViewLeft = function () {
    return this.updateViewDiff_0(0, -1);
  };
  Model.prototype.moveViewRight = function () {
    return this.updateViewDiff_0(0, 1);
  };
  Model.prototype.updateViewDiff_0 = function (diffRow, diffCol) {
    var location = new Location(this.viewscreen_0.row + diffRow | 0, this.viewscreen_0.col + diffCol | 0);
    return this.updateView_0(location);
  };
  Model.prototype.jumpTo = function (row, col) {
    var selectRow = 5;
    var selectCol = 5;
    if (!this.updateView_1(row, col)) {
      selectRow = row - this.viewscreen_0.row + (this.height_0 / 2 | 0) | 0;
      selectCol = col - this.viewscreen_0.col + (this.width_0 / 2 | 0) | 0;
    }return mutableListOf([selectRow, selectCol]);
  };
  Model.prototype.updateView_1 = function (row, col) {
    var location = new Location(row, col);
    return this.updateView_0(location);
  };
  Model.prototype.updateView_0 = function (location) {
    var over = false;
    if (location.row < (this.height_0 / 2 | 0)) {
      location.row = this.height_0 / 2 | 0;
      over = true;
    }if (location.row > (this.size_0 - (this.height_0 / 2 | 0) - 1 | 0)) {
      location.row = this.size_0 - (this.height_0 / 2 | 0) - 1 | 0;
      over = true;
    }if (location.col < (this.width_0 / 2 | 0)) {
      location.col = this.width_0 / 2 | 0;
      over = true;
    }if (location.col > (this.size_0 - (this.width_0 / 2 | 0) - 1 | 0)) {
      location.col = this.size_0 - (this.width_0 / 2 | 0) - 1 | 0;
      over = true;
    }this.viewscreen_0.setLoc_vux9f0$(location.row, location.col);
    this.updateBuffer_0();
    if (over) {
      return false;
    }return true;
  };
  Model.prototype.spawnPWorkerInt_0 = function (row, col) {
    var location = new Location(row, col);
    var pworker = new PWorker(location);
    return this.spawnTile_0(location, pworker);
  };
  Model.prototype.spawnPBuilderInt_0 = function (row, col) {
    var location = new Location(row, col);
    var pbuilder = new PBuilder(location);
    return this.spawnTile_0(location, pbuilder);
  };
  Model.prototype.spawnPSoldierInt_0 = function (row, col) {
    var location = new Location(row, col);
    var psoldier = new PSoldier(location);
    return this.spawnTile_0(location, psoldier);
  };
  Model.prototype.spawnPFactoryInt_0 = function (row, col) {
    var location = new Location(row, col);
    var pfactory = new PFactory(location);
    return this.spawnTile_0(location, pfactory);
  };
  Model.prototype.spawnEBuilderInt_0 = function (row, col) {
    var location = new Location(row, col);
    var ebuilder = new EBuilder(location);
    return this.spawnTile_0(location, ebuilder);
  };
  Model.prototype.spawnTile_0 = function (location, tile) {
    if (!this.isOnBoard_0(location) || this.units_0.tiles.get_za3lpa$(location.row).get_za3lpa$(location.col).occ || !this.world_0.tiles.get_za3lpa$(location.row).get_za3lpa$(location.col).traverse) {
      var nullLocation = new Location(-1, -1);
      var nullTile = new BlankTile(nullLocation);
      return nullTile;
    }if (Kotlin.isType(tile, Unit)) {
      if (tile.owner === 1) {
        this.playerUnits_0.units.add_11rb$(tile);
      } else if (tile.owner === 2) {
        this.enemyUnits_0.add_11rb$(tile);
      }} else if (Kotlin.isType(tile, Building)) {
      if (tile.owner === 1) {
        this.playerBuildings_0.units.add_11rb$(tile);
      } else
        tile.owner;
    }return tile;
  };
  Model.prototype.moveUp = function (who, row, col) {
    return this.moveDiff_0(who, row, col, -1, 0);
  };
  Model.prototype.moveDown = function (who, row, col) {
    return this.moveDiff_0(who, row, col, 1, 0);
  };
  Model.prototype.moveLeft = function (who, row, col) {
    return this.moveDiff_0(who, row, col, 0, -1);
  };
  Model.prototype.moveRight = function (who, row, col) {
    return this.moveDiff_0(who, row, col, 0, 1);
  };
  Model.prototype.moveDiff_0 = function (who, fromRow, fromCol, diffRow, diffCol) {
    var fromLocation = new Location(fromRow, fromCol);
    var toLocation = new Location(fromRow + diffRow | 0, fromCol + diffCol | 0);
    var move = new Move(fromLocation, toLocation);
    var tile = this.getUnitAt_0(fromLocation);
    if (!this.isValidMove_0(move) || who !== tile.owner) {
      return false;
    }if (tile.owner === 1) {
      this.playerMovesQueue_0.add_11rb$(move);
      return true;
    } else if (tile.owner === 2) {
      this.enemyMovesQueue_0.add_11rb$(move);
      return true;
    }return false;
  };
  Model.prototype.moveUnitInList_0 = function (tile, to) {
    if (tile.owner === 1) {
      var i = this.playerUnits_0.units.indexOf_11rb$(tile);
      if (i !== -1) {
        this.playerUnits_0.units.get_za3lpa$(i).loc = to;
      }} else if (tile.owner === 2) {
      var i_0 = this.enemyUnits_0.indexOf_11rb$(tile);
      if (i_0 !== -1) {
        this.enemyUnits_0.get_za3lpa$(i_0).loc = to;
      }}};
  Model.prototype.move_0 = function (move) {
    var fromTile = this.getUnitAt_0(move.from);
    if (!this.isValidMove_0(move)) {
      return false;
    }this.moveUnitInList_0(fromTile, move.to);
    return true;
  };
  Model.prototype.buildPFactory_0 = function (row, col) {
    var location = new Location(-1, -1);
    var factory = new PFactory(location);
    return this.build_0(row, col, factory);
  };
  Model.prototype.createPBuilder_0 = function (row, col) {
    var location = new Location(row, col);
    var pbuilder = new PBuilder(location);
    return this.create_0(location, pbuilder);
  };
  Model.prototype.createPWorker_0 = function (row, col) {
    var location = new Location(row, col);
    var pworker = new PWorker(location);
    return this.create_0(location, pworker);
  };
  Model.prototype.abort_0 = function (location) {
    var unitAborter = this.units_0.tiles.get_za3lpa$(location.row).get_za3lpa$(location.col);
    var worldAborter = this.world_0.tiles.get_za3lpa$(location.row).get_za3lpa$(location.col);
    var adjacent1 = this.isGatherableResourceAdjacent_0(location);
    var adjacent2 = this.isOpenAdjacentSpace_0(location);
    var index1 = this.playerUnits_0.units.indexOf_11rb$(unitAborter);
    var index2 = this.playerBuildings_0.units.indexOf_11rb$(worldAborter);
    if (Kotlin.isType(unitAborter, Unit) && this.playerUnits_0.units.get_za3lpa$(index1).wait > 0) {
      if (Kotlin.isType(unitAborter, Builder)) {
        if (unitAborter.owner === 1) {
          this.world_0.tiles.get_za3lpa$(location.row).get_za3lpa$(location.col).abort = true;
          this.playerUnits_0.units.get_za3lpa$(index1).wait = 0;
          return true;
        } else if (unitAborter.owner === 2) {
          return true;
        }} else if (Kotlin.isType(unitAborter, Worker)) {
        if (unitAborter.owner === 1) {
          this.world_0.tiles.get_za3lpa$(adjacent1.row).get_za3lpa$(adjacent1.col).abort = true;
          this.playerUnits_0.units.get_za3lpa$(index1).wait = 0;
          return true;
        } else if (unitAborter.owner === 2) {
          return true;
        }}}if (Kotlin.isType(worldAborter, Building) && this.playerBuildings_0.units.get_za3lpa$(index2).wait > 0) {
      if (worldAborter.owner === 1) {
        this.world_0.tiles.get_za3lpa$(adjacent2.row).get_za3lpa$(adjacent2.col).abort = true;
        this.playerBuildings_0.units.get_za3lpa$(index2).wait = 0;
        return true;
      } else if (worldAborter.owner === 2) {
        return true;
      }}return false;
  };
  Model.prototype.attack_0 = function (location) {
    var tmp$, tmp$_0, tmp$_1;
    var attacker = this.units_0.tiles.get_za3lpa$(location.row).get_za3lpa$(location.col);
    var possibleLocation = this.isAttackableTileAdjacent_0(location);
    if (possibleLocation.row === -1 || possibleLocation.col === -1) {
      return false;
    }var unitTile = this.units_0.tiles.get_za3lpa$(possibleLocation.row).get_za3lpa$(possibleLocation.col);
    var worldTile = this.world_0.tiles.get_za3lpa$(possibleLocation.row).get_za3lpa$(possibleLocation.col);
    if (!Kotlin.isType(attacker, Soldier) || attacker.wait > 0 || !Kotlin.isType(unitTile, Unit)) {
      return false;
    }if (attacker.owner === unitTile.owner || attacker.owner === worldTile.owner) {
      return false;
    }if (Kotlin.isType(unitTile, Unit)) {
      if (attacker.owner === 1) {
        var index = this.enemyUnits_0.indexOf_11rb$(unitTile);
        tmp$ = this.enemyUnits_0.get_za3lpa$(index);
        tmp$.health = tmp$.health - 10 | 0;
        index = this.playerUnits_0.units.indexOf_11rb$(attacker);
        this.playerUnits_0.units.get_za3lpa$(index).wait = 3;
      } else if (attacker.owner === 2) {
        var index_0 = this.playerUnits_0.units.indexOf_11rb$(unitTile);
        tmp$_0 = this.playerUnits_0.units.get_za3lpa$(index_0);
        tmp$_0.health = tmp$_0.health - 10 | 0;
        index_0 = this.enemyUnits_0.indexOf_11rb$(attacker);
        this.enemyUnits_0.get_za3lpa$(index_0).wait = 2;
      }} else if (Kotlin.isType(worldTile, Resource) || Kotlin.isType(worldTile, Building)) {
      tmp$_1 = this.world_0.tiles.get_za3lpa$(possibleLocation.row).get_za3lpa$(possibleLocation.col);
      tmp$_1.health = tmp$_1.health - 10 | 0;
    }return true;
  };
  Model.prototype.gather_0 = function (location) {
    var gatherer = this.units_0.tiles.get_za3lpa$(location.row).get_za3lpa$(location.col);
    var index = this.playerUnits_0.units.indexOf_11rb$(gatherer);
    var possibleLocation = this.isGatherableResourceAdjacent_0(location);
    if (possibleLocation.row === -1 || possibleLocation.col === -1) {
      return false;
    }var tile = this.world_0.tiles.get_za3lpa$(possibleLocation.row).get_za3lpa$(possibleLocation.col);
    if (!Kotlin.isType(gatherer, Worker) || gatherer.wait > 0 || !Kotlin.isType(tile, Resource)) {
      return false;
    }if (Kotlin.isType(tile, GasVent)) {
      if (gatherer.owner === 1) {
        this.playerUnits_0.units.removeAt_za3lpa$(index);
        this.world_0.tiles.get_za3lpa$(possibleLocation.row).set_wxm5ur$(possibleLocation.col, new PGasCollector(possibleLocation));
        this.playerGatherQueue_0.add_11rb$(tile);
        return true;
      } else
        gatherer.owner;
    } else if (Kotlin.isType(tile, Minerals)) {
      if (gatherer.owner === 1) {
        this.playerUnits_0.units.get_za3lpa$(index).wait = 5;
        this.playerGatherQueue_0.add_11rb$(tile);
        return true;
      } else
        gatherer.owner;
    }return false;
  };
  Model.prototype.create_0 = function (location, tile) {
    var building = this.world_0.tiles.get_za3lpa$(location.row).get_za3lpa$(location.col);
    if (!Kotlin.isType(building, Building) || !this.isAffordable_0(building.owner, tile) || building.wait > 0) {
      return false;
    }var possibleLocation = this.isOpenAdjacentSpace_0(building.loc);
    if (possibleLocation.row === -1 || possibleLocation.col === -1) {
      return false;
    }this.playerData_0.subResource_qt1dr2$(tile.minCost, tile.gasCost, tile.nrgCost);
    var index = this.playerBuildings_0.units.indexOf_11rb$(building);
    this.playerBuildings_0.units.get_za3lpa$(index).wait = 4;
    tile.loc = possibleLocation;
    tile.wait = 4;
    if (building.owner === 1) {
      this.playerCreationQueue_0.add_11rb$(tile);
    } else
      building.owner;
    return true;
  };
  Model.prototype.build_0 = function (row, col, tile) {
    var builder = this.units_0.tiles.get_za3lpa$(row).get_za3lpa$(col);
    if (!Kotlin.isType(builder, Builder) || !this.isAffordable_0(builder.owner, tile) || builder.wait > 0) {
      return false;
    }var location = builder.loc;
    if (!this.moveLeft(builder.owner, builder.loc.row, builder.loc.col)) {
      if (!this.moveDown(builder.owner, builder.loc.row, builder.loc.col)) {
        if (!this.moveRight(builder.owner, builder.loc.row, builder.loc.col)) {
          if (!this.moveUp(builder.owner, builder.loc.row, builder.loc.col)) {
            return false;
          }}}}this.playerData_0.subResource_qt1dr2$(tile.minCost, tile.gasCost, tile.nrgCost);
    var index = this.playerUnits_0.units.indexOf_11rb$(builder);
    this.playerUnits_0.units.get_za3lpa$(index).wait = 8;
    tile.loc = location;
    tile.wait = 8;
    if (builder.owner === 1) {
      this.playerBuildQueue_0.add_11rb$(tile);
    } else
      builder.owner;
    return true;
  };
  Model.prototype.getPNG = function (row, col) {
    return this.buffer_0.tiles.get_za3lpa$(row).get_za3lpa$(col).getPNG();
  };
  Model.prototype.getUnitList = function () {
    return this.playerUnits_0;
  };
  Model.prototype.getBuildingList = function () {
    return this.playerBuildings_0;
  };
  Model.prototype.getBuffer = function () {
    this.updateUnits_0();
    this.updateCombined_0();
    this.updateBuffer_0();
    return this.buffer_0;
  };
  Model.prototype.getSize = function () {
    return this.size_0;
  };
  Model.prototype.processPlayerWaits = function () {
    var tmp$, tmp$_0;
    tmp$ = this.playerUnits_0.units.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (i.wait > 0) {
        i.wait = i.wait - 1 | 0;
      }}
    tmp$_0 = this.playerBuildings_0.units.iterator();
    while (tmp$_0.hasNext()) {
      var i_0 = tmp$_0.next();
      if (i_0.wait > 0) {
        i_0.wait = i_0.wait - 1 | 0;
      }}
  };
  Model.prototype.processEMmoves = function () {
    var tmp$, tmp$_0;
    var newList = ArrayList_init();
    tmp$ = this.enemyMovesQueue_0.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      this.move_0(i);
      newList.add_11rb$(i);
    }
    tmp$_0 = newList.iterator();
    while (tmp$_0.hasNext()) {
      var i_0 = tmp$_0.next();
      this.enemyMovesQueue_0.remove_11rb$(i_0);
    }
  };
  Model.prototype.processPMoves = function () {
    var tmp$, tmp$_0;
    var newList = ArrayList_init();
    tmp$ = this.playerMovesQueue_0.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      var tile = this.getUnitAt_0(i.from);
      if (tile.wait === 0) {
        this.move_0(i);
        newList.add_11rb$(i);
      }}
    tmp$_0 = newList.iterator();
    while (tmp$_0.hasNext()) {
      var i_0 = tmp$_0.next();
      this.playerMovesQueue_0.remove_11rb$(i_0);
    }
  };
  Model.prototype.processPBuildQ = function () {
    var tmp$, tmp$_0;
    var newList = ArrayList_init();
    tmp$ = this.playerBuildQueue_0.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (this.world_0.tiles.get_za3lpa$(i.loc.row).get_za3lpa$(i.loc.col).abort) {
        this.world_0.tiles.get_za3lpa$(i.loc.row).get_za3lpa$(i.loc.col).abort = false;
        this.playerData_0.addResource_qt1dr2$(i.minCost, i.gasCost, i.nrgCost);
        newList.add_11rb$(i);
      } else if (i.wait > 0) {
        i.wait = i.wait - 1 | 0;
      } else {
        this.playerBuildings_0.units.add_11rb$(i);
        newList.add_11rb$(i);
      }
    }
    tmp$_0 = newList.iterator();
    while (tmp$_0.hasNext()) {
      var i_0 = tmp$_0.next();
      this.playerBuildQueue_0.remove_11rb$(i_0);
    }
  };
  Model.prototype.processPCreationQ = function () {
    var tmp$, tmp$_0;
    var newList = ArrayList_init();
    tmp$ = this.playerCreationQueue_0.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (this.world_0.tiles.get_za3lpa$(i.loc.row).get_za3lpa$(i.loc.col).abort) {
        this.world_0.tiles.get_za3lpa$(i.loc.row).get_za3lpa$(i.loc.col).abort = false;
        this.playerData_0.addResource_qt1dr2$(i.minCost, i.gasCost, i.nrgCost);
        newList.add_11rb$(i);
      } else if (i.wait > 0) {
        i.wait = i.wait - 1 | 0;
      } else {
        this.playerUnits_0.units.add_11rb$(i);
        newList.add_11rb$(i);
      }
    }
    tmp$_0 = newList.iterator();
    while (tmp$_0.hasNext()) {
      var i_0 = tmp$_0.next();
      this.playerCreationQueue_0.remove_11rb$(i_0);
    }
  };
  Model.prototype.processPlayerGatherQ = function () {
    var tmp$, tmp$_0;
    var newList = ArrayList_init();
    tmp$ = this.playerGatherQueue_0.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (this.world_0.tiles.get_za3lpa$(i.loc.row).get_za3lpa$(i.loc.col).abort) {
        this.world_0.tiles.get_za3lpa$(i.loc.row).get_za3lpa$(i.loc.col).abort = false;
        newList.add_11rb$(i);
      } else if (this.world_0.tiles.get_za3lpa$(i.loc.row).get_za3lpa$(i.loc.col).health <= 0) {
        newList.add_11rb$(i);
        this.world_0.tiles.get_za3lpa$(i.loc.row).set_wxm5ur$(i.loc.col, new GrassTile(i.loc));
      } else {
        i.health = i.health - 10 | 0;
        this.playerData_0.addResource_qt1dr2$(i.minSal, i.gasSal, i.nrgSal);
      }
    }
    tmp$_0 = newList.iterator();
    while (tmp$_0.hasNext()) {
      var i_0 = tmp$_0.next();
      this.playerGatherQueue_0.remove_11rb$(i_0);
    }
  };
  Model.prototype.processDeadUnits = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var newList = ArrayList_init();
    tmp$ = this.playerUnits_0.units.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (i.health <= 0) {
        newList.add_11rb$(i);
      }}
    tmp$_0 = newList.iterator();
    while (tmp$_0.hasNext()) {
      var i_0 = tmp$_0.next();
      this.playerUnits_0.units.remove_11rb$(i_0);
    }
    newList.clear();
    tmp$_1 = this.enemyUnits_0.iterator();
    while (tmp$_1.hasNext()) {
      var i_1 = tmp$_1.next();
      if (i_1.health <= 0) {
        newList.add_11rb$(i_1);
      }}
    tmp$_2 = newList.iterator();
    while (tmp$_2.hasNext()) {
      var i_2 = tmp$_2.next();
      this.enemyUnits_0.remove_11rb$(i_2);
    }
  };
  Model.prototype.processDeadBuildings = function () {
    var tmp$, tmp$_0;
    var newList = ArrayList_init();
    tmp$ = this.playerBuildings_0.units.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (i.health <= 0) {
        if (Kotlin.isType(i, Building)) {
          this.world_0.tiles.get_za3lpa$(i.loc.row).get_za3lpa$(i.loc.col).abort = true;
        }newList.add_11rb$(i);
      }}
    tmp$_0 = newList.iterator();
    while (tmp$_0.hasNext()) {
      var i_0 = tmp$_0.next();
      this.playerBuildings_0.units.remove_11rb$(i_0);
      if (Kotlin.isType(i_0, GasCollector)) {
        this.world_0.tiles.get_za3lpa$(i_0.loc.row).set_wxm5ur$(i_0.loc.col, new GasVent(i_0.loc));
      } else if (Kotlin.isType(i_0, HQ)) {
        this.gameWon_0 = 2;
        this.world_0.tiles.get_za3lpa$(i_0.loc.row).set_wxm5ur$(i_0.loc.col, new GrassTile(i_0.loc));
      } else {
        this.world_0.tiles.get_za3lpa$(i_0.loc.row).set_wxm5ur$(i_0.loc.col, new GrassTile(i_0.loc));
      }
    }
    newList.clear();
  };
  Model.prototype.isValidMove_0 = function (move) {
    if (!this.isOnBoard_0(move.to)) {
      return false;
    }var fromTile = this.getUnitAt_0(move.from);
    var toUnitTile = this.getUnitAt_0(move.to);
    var toWorldTile = this.getWorldAt_0(move.to);
    if (fromTile.blank) {
      return false;
    }if (fromTile.wait > 0 || !fromTile.occ || !fromTile.drive || toUnitTile.occ || !toUnitTile.traverse || toWorldTile.occ || !toWorldTile.traverse) {
      return false;
    }if (toUnitTile.blank) {
      return true;
    }return true;
  };
  Model.prototype.updateUnits_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = this.size_0;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.size_0;
      for (var j = 0; j < tmp$_0; j++) {
        var location = new Location(i, j);
        this.units_0.tiles.get_za3lpa$(i).set_wxm5ur$(j, new BlankTile(location));
      }
    }
    tmp$_1 = this.playerUnits_0.units.iterator();
    while (tmp$_1.hasNext()) {
      var i_0 = tmp$_1.next();
      this.units_0.tiles.get_za3lpa$(i_0.loc.row).set_wxm5ur$(i_0.loc.col, i_0);
    }
    tmp$_2 = this.playerBuildings_0.units.iterator();
    while (tmp$_2.hasNext()) {
      var i_1 = tmp$_2.next();
      this.world_0.tiles.get_za3lpa$(i_1.loc.row).set_wxm5ur$(i_1.loc.col, i_1);
    }
    tmp$_3 = this.enemyUnits_0.iterator();
    while (tmp$_3.hasNext()) {
      var i_2 = tmp$_3.next();
      this.units_0.tiles.get_za3lpa$(i_2.loc.row).set_wxm5ur$(i_2.loc.col, i_2);
    }
  };
  Model.prototype.updateCombined_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = this.size_0;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.size_0;
      for (var j = 0; j < tmp$_0; j++) {
        this.combined_0.tiles.get_za3lpa$(i).set_wxm5ur$(j, this.world_0.tiles.get_za3lpa$(i).get_za3lpa$(j));
      }
    }
    tmp$_1 = this.size_0;
    for (var i_0 = 0; i_0 < tmp$_1; i_0++) {
      tmp$_2 = this.size_0;
      for (var j_0 = 0; j_0 < tmp$_2; j_0++) {
        if (!this.units_0.tiles.get_za3lpa$(i_0).get_za3lpa$(j_0).blank) {
          this.combined_0.tiles.get_za3lpa$(i_0).set_wxm5ur$(j_0, this.units_0.tiles.get_za3lpa$(i_0).get_za3lpa$(j_0));
        }}
    }
  };
  Model.prototype.updateBuffer_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var y = 0;
    tmp$ = this.viewscreen_0.row - (this.height_0 / 2 | 0) | 0;
    tmp$_0 = this.height_0 + this.viewscreen_0.row - (this.height_0 / 2 | 0) | 0;
    for (var i = tmp$; i < tmp$_0; i++) {
      var x = 0;
      tmp$_1 = this.viewscreen_0.col - (this.height_0 / 2 | 0) | 0;
      tmp$_2 = this.height_0 + this.viewscreen_0.col - (this.height_0 / 2 | 0) | 0;
      for (var j = tmp$_1; j < tmp$_2; j++) {
        this.buffer_0.tiles.get_za3lpa$(y).set_wxm5ur$(x, this.combined_0.tiles.get_za3lpa$(i).get_za3lpa$(j));
        x = x + 1 | 0;
      }
      y = y + 1 | 0;
    }
  };
  Model.prototype.getLocAt = function (row, col) {
    var tile = this.buffer_0.tiles.get_za3lpa$(row).get_za3lpa$(col);
    return mutableListOf([tile.loc.row, tile.loc.col]);
  };
  Model.prototype.getCommandsAt = function (row, col) {
    return this.buffer_0.tiles.get_za3lpa$(row).get_za3lpa$(col).commands;
  };
  Model.prototype.getStatusAt = function (row, col) {
    var tile = this.buffer_0.tiles.get_za3lpa$(row).get_za3lpa$(col);
    if (tile.use) {
      if (tile.wait > 0) {
        return mutableListOf(['Working for ' + toString(tile.wait) + ' more seconds', 'Health: ' + toString(tile.health)]);
      } else {
        return mutableListOf(['Health: ' + toString(tile.health)]);
      }
    }return mutableListOf(['No status available']);
  };
  Model.prototype.getResources = function () {
    return this.playerData_0.getResources();
  };
  Model.prototype.issueCommandsAt = function (row, col, command) {
    var tile = this.buffer_0.tiles.get_za3lpa$(row).get_za3lpa$(col);
    var location = tile.loc;
    if (Kotlin.isType(tile, PBuilder)) {
      if (command === 0) {
        if (this.buildPFactory_0(location.row, location.col)) {
          return 'PFactory is being built';
        }}if (command === 1) {
        if (this.abort_0(location)) {
          return 'Aborting';
        }}} else if (Kotlin.isType(tile, PFactory)) {
      if (command === 0) {
        if (this.createPBuilder_0(location.row, location.col)) {
          return 'PBuilder creation in progress';
        }}if (command === 1) {
        if (this.createPWorker_0(location.row, location.col)) {
          return 'PWorker creation in progress';
        }}if (command === 2) {
        if (this.abort_0(location)) {
          return 'Aborting';
        }}} else if (Kotlin.isType(tile, PWorker)) {
      if (command === 0) {
        if (this.gather_0(location)) {
          return 'Gathering resources';
        }}if (command === 1) {
        if (this.abort_0(location)) {
          return 'Aborting';
        }}} else if (Kotlin.isType(tile, PSoldier)) {
      if (command === 0) {
        if (this.attack_0(location)) {
          return 'Attacking';
        }}}return 'Command failed';
  };
  Model.prototype.getUnitAt_0 = function (location) {
    return this.units_0.tiles.get_za3lpa$(location.row).get_za3lpa$(location.col);
  };
  Model.prototype.getWorldAt_0 = function (location) {
    return this.world_0.tiles.get_za3lpa$(location.row).get_za3lpa$(location.col);
  };
  Model.prototype.isOnBoard_0 = function (location) {
    if (location.row >= this.size_0 || location.row < 0 || location.col >= this.size_0 || location.col < 0) {
      return false;
    }return true;
  };
  Model.prototype.isOpenAdjacentSpace_0 = function (location) {
    var tmp$;
    var leftLocation = new Location(location.row, location.col - 1 | 0);
    var rightLocation = new Location(location.row, location.col + 1 | 0);
    var downLocation = new Location(location.row + 1 | 0, location.col);
    var upLocation = new Location(location.row - 1 | 0, location.col);
    var aList = mutableListOf([leftLocation, rightLocation, downLocation, upLocation]);
    tmp$ = aList.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (this.isOnBoard_0(i) && !this.units_0.tiles.get_za3lpa$(i.row).get_za3lpa$(i.col).occ && !this.world_0.tiles.get_za3lpa$(i.row).get_za3lpa$(i.col).occ) {
        return i;
      }}
    var nullLocation = new Location(-1, -1);
    return nullLocation;
  };
  Model.prototype.isGatherableResourceAdjacent_0 = function (location) {
    var tmp$;
    var leftLocation = new Location(location.row, location.col - 1 | 0);
    var rightLocation = new Location(location.row, location.col + 1 | 0);
    var downLocation = new Location(location.row + 1 | 0, location.col);
    var upLocation = new Location(location.row - 1 | 0, location.col);
    var aList = mutableListOf([upLocation, downLocation, leftLocation, rightLocation]);
    tmp$ = aList.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (this.isOnBoard_0(i) && this.world_0.tiles.get_za3lpa$(i.row).get_za3lpa$(i.col).health > 0) {
        return i;
      }}
    var nullLocation = new Location(-1, -1);
    return nullLocation;
  };
  Model.prototype.isAttackableTileAdjacent_0 = function (location) {
    var tmp$, tmp$_0, tmp$_1;
    var leftLocation = new Location(location.row, location.col - 1 | 0);
    var rightLocation = new Location(location.row, location.col + 1 | 0);
    var downLocation = new Location(location.row + 1 | 0, location.col);
    var upLocation = new Location(location.row - 1 | 0, location.col);
    var aList = mutableListOf([upLocation, downLocation, leftLocation, rightLocation]);
    var removeList = ArrayList_init();
    tmp$ = aList.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (!this.isOnBoard_0(i)) {
        removeList.add_11rb$(i);
      }}
    tmp$_0 = removeList.iterator();
    while (tmp$_0.hasNext()) {
      var i_0 = tmp$_0.next();
      aList.remove_11rb$(i_0);
    }
    tmp$_1 = aList.iterator();
    while (tmp$_1.hasNext()) {
      var i_1 = tmp$_1.next();
      var worldTile = this.world_0.tiles.get_za3lpa$(i_1.row).get_za3lpa$(i_1.col);
      var unitTile = this.units_0.tiles.get_za3lpa$(i_1.row).get_za3lpa$(i_1.col);
      if (this.isOnBoard_0(i_1) && (worldTile.health > 0 || unitTile.health > 0)) {
        return i_1;
      }}
    var nullLocation = new Location(-1, -1);
    return nullLocation;
  };
  Model.prototype.isAffordable_0 = function (buyer, tile) {
    var data = new GameData(-1);
    if (buyer === 1) {
      data = this.playerData_0;
    }if (tile.minCost > data.minerals || tile.gasCost > data.gas || tile.nrgCost > data.nrg) {
      return false;
    }return true;
  };
  Model.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Model',
    interfaces: []
  };
  function Move(from, to) {
    this.from = from;
    this.to = to;
  }
  Move.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Move',
    interfaces: []
  };
  function NRGPlant() {
    Building.call(this);
    this.minCost_9zt6vz$_0 = 200;
    this.gasCost_dv1z5y$_0 = 100;
    this.nrgSal_mq5i3r$_0 = 5;
    this.nrgCost_5judgw$_0 = 0;
    this.commands_oy79f0$_0 = mutableListOf(['Abort']);
    this.health_p19ehk$_0 = 100;
  }
  Object.defineProperty(NRGPlant.prototype, 'minCost', {
    get: function () {
      return this.minCost_9zt6vz$_0;
    },
    set: function (minCost) {
      this.minCost_9zt6vz$_0 = minCost;
    }
  });
  Object.defineProperty(NRGPlant.prototype, 'gasCost', {
    get: function () {
      return this.gasCost_dv1z5y$_0;
    },
    set: function (gasCost) {
      this.gasCost_dv1z5y$_0 = gasCost;
    }
  });
  Object.defineProperty(NRGPlant.prototype, 'nrgSal', {
    get: function () {
      return this.nrgSal_mq5i3r$_0;
    },
    set: function (nrgSal) {
      this.nrgSal_mq5i3r$_0 = nrgSal;
    }
  });
  Object.defineProperty(NRGPlant.prototype, 'nrgCost', {
    get: function () {
      return this.nrgCost_5judgw$_0;
    },
    set: function (nrgCost) {
      this.nrgCost_5judgw$_0 = nrgCost;
    }
  });
  Object.defineProperty(NRGPlant.prototype, 'commands', {
    get: function () {
      return this.commands_oy79f0$_0;
    },
    set: function (commands) {
      this.commands_oy79f0$_0 = commands;
    }
  });
  Object.defineProperty(NRGPlant.prototype, 'health', {
    get: function () {
      return this.health_p19ehk$_0;
    },
    set: function (health) {
      this.health_p19ehk$_0 = health;
    }
  });
  NRGPlant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NRGPlant',
    interfaces: [Building]
  };
  function PBuilder(location) {
    Builder.call(this);
    this.loc_x7hkbn$_0 = location;
    this.use_x7bqfe$_0 = true;
    this.drive_nqvca5$_0 = true;
    this.owner_igjoc6$_0 = 1;
    this.icon_z2ehsy$_0 = 'pB';
  }
  Object.defineProperty(PBuilder.prototype, 'loc', {
    get: function () {
      return this.loc_x7hkbn$_0;
    },
    set: function (loc) {
      this.loc_x7hkbn$_0 = loc;
    }
  });
  Object.defineProperty(PBuilder.prototype, 'use', {
    get: function () {
      return this.use_x7bqfe$_0;
    },
    set: function (use) {
      this.use_x7bqfe$_0 = use;
    }
  });
  Object.defineProperty(PBuilder.prototype, 'drive', {
    get: function () {
      return this.drive_nqvca5$_0;
    },
    set: function (drive) {
      this.drive_nqvca5$_0 = drive;
    }
  });
  Object.defineProperty(PBuilder.prototype, 'owner', {
    get: function () {
      return this.owner_igjoc6$_0;
    },
    set: function (owner) {
      this.owner_igjoc6$_0 = owner;
    }
  });
  Object.defineProperty(PBuilder.prototype, 'icon', {
    get: function () {
      return this.icon_z2ehsy$_0;
    },
    set: function (icon) {
      this.icon_z2ehsy$_0 = icon;
    }
  });
  PBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PBuilder',
    interfaces: [Builder]
  };
  function PFactory(location) {
    Factory.call(this);
    this.loc_8v6i1a$_0 = location;
    this.use_8vcbxj$_0 = true;
    this.owner_1t7xhh$_0 = 1;
    this.icon_9bpg8j$_0 = 'pF';
  }
  Object.defineProperty(PFactory.prototype, 'loc', {
    get: function () {
      return this.loc_8v6i1a$_0;
    },
    set: function (loc) {
      this.loc_8v6i1a$_0 = loc;
    }
  });
  Object.defineProperty(PFactory.prototype, 'use', {
    get: function () {
      return this.use_8vcbxj$_0;
    },
    set: function (use) {
      this.use_8vcbxj$_0 = use;
    }
  });
  Object.defineProperty(PFactory.prototype, 'owner', {
    get: function () {
      return this.owner_1t7xhh$_0;
    },
    set: function (owner) {
      this.owner_1t7xhh$_0 = owner;
    }
  });
  Object.defineProperty(PFactory.prototype, 'icon', {
    get: function () {
      return this.icon_9bpg8j$_0;
    },
    set: function (icon) {
      this.icon_9bpg8j$_0 = icon;
    }
  });
  PFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PFactory',
    interfaces: [Factory]
  };
  function PGasCollector(location) {
    GasCollector.call(this);
    this.loc_jvdc3g$_0 = location;
    this.use_jv7i77$_0 = true;
    this.owner_cg22up$_0 = 1;
    this.icon_n7obdj$_0 = 'pGC';
  }
  Object.defineProperty(PGasCollector.prototype, 'loc', {
    get: function () {
      return this.loc_jvdc3g$_0;
    },
    set: function (loc) {
      this.loc_jvdc3g$_0 = loc;
    }
  });
  Object.defineProperty(PGasCollector.prototype, 'use', {
    get: function () {
      return this.use_jv7i77$_0;
    },
    set: function (use) {
      this.use_jv7i77$_0 = use;
    }
  });
  Object.defineProperty(PGasCollector.prototype, 'owner', {
    get: function () {
      return this.owner_cg22up$_0;
    },
    set: function (owner) {
      this.owner_cg22up$_0 = owner;
    }
  });
  Object.defineProperty(PGasCollector.prototype, 'icon', {
    get: function () {
      return this.icon_n7obdj$_0;
    },
    set: function (icon) {
      this.icon_n7obdj$_0 = icon;
    }
  });
  PGasCollector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PGasCollector',
    interfaces: [GasCollector]
  };
  function PHQ(location) {
    HQ.call(this);
    this.loc_7qz1ch$_0 = location;
    this.use_7qt7g8$_0 = true;
    this.owner_cra0ws$_0 = 1;
    this.icon_r6or90$_0 = 'pHQ';
  }
  Object.defineProperty(PHQ.prototype, 'loc', {
    get: function () {
      return this.loc_7qz1ch$_0;
    },
    set: function (loc) {
      this.loc_7qz1ch$_0 = loc;
    }
  });
  Object.defineProperty(PHQ.prototype, 'use', {
    get: function () {
      return this.use_7qt7g8$_0;
    },
    set: function (use) {
      this.use_7qt7g8$_0 = use;
    }
  });
  Object.defineProperty(PHQ.prototype, 'owner', {
    get: function () {
      return this.owner_cra0ws$_0;
    },
    set: function (owner) {
      this.owner_cra0ws$_0 = owner;
    }
  });
  Object.defineProperty(PHQ.prototype, 'icon', {
    get: function () {
      return this.icon_r6or90$_0;
    },
    set: function (icon) {
      this.icon_r6or90$_0 = icon;
    }
  });
  PHQ.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PHQ',
    interfaces: [HQ]
  };
  function PlayerBuildings() {
    this.units = ArrayList_init();
    this.counter_0 = 0;
  }
  PlayerBuildings.prototype.getNextFactory = function () {
    if (this.units.size === 0) {
      return mutableListOf([-1, -1]);
    } else if (this.units.size === 1 && Kotlin.isType(this.units.get_za3lpa$(0), PFactory)) {
      return mutableListOf([this.units.get_za3lpa$(0).loc.row, this.units.get_za3lpa$(0).loc.col]);
    }var stop = this.units.size;
    for (var i = 0; i < stop; i++) {
      this.counter_0 = this.counter_0 + 1 | 0;
      if (this.counter_0 === this.units.size) {
        this.counter_0 = 0;
      }if (Kotlin.isType(this.units.get_za3lpa$(this.counter_0), PFactory)) {
        return mutableListOf([this.units.get_za3lpa$(this.counter_0).loc.row, this.units.get_za3lpa$(this.counter_0).loc.col]);
      }}
    return mutableListOf([-1, -1]);
  };
  PlayerBuildings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerBuildings',
    interfaces: []
  };
  function PlayerUnits() {
    this.units = ArrayList_init();
    this.counter_0 = 0;
  }
  PlayerUnits.prototype.getNextBuilder = function () {
    if (this.units.size === 0) {
      return mutableListOf([-1, -1]);
    } else if (this.units.size === 1 && Kotlin.isType(this.units.get_za3lpa$(0), PBuilder)) {
      return mutableListOf([this.units.get_za3lpa$(0).loc.row, this.units.get_za3lpa$(0).loc.col]);
    }var stop = this.units.size;
    for (var i = 0; i < stop; i++) {
      this.counter_0 = this.counter_0 + 1 | 0;
      if (this.counter_0 === this.units.size) {
        this.counter_0 = 0;
      }if (Kotlin.isType(this.units.get_za3lpa$(this.counter_0), PBuilder)) {
        return mutableListOf([this.units.get_za3lpa$(this.counter_0).loc.row, this.units.get_za3lpa$(this.counter_0).loc.col]);
      }}
    return mutableListOf([-1, -1]);
  };
  PlayerUnits.prototype.getNextWorker = function () {
    if (this.units.size === 0) {
      return mutableListOf([-1, -1]);
    } else if (this.units.size === 1 && Kotlin.isType(this.units.get_za3lpa$(0), PWorker)) {
      return mutableListOf([this.units.get_za3lpa$(0).loc.row, this.units.get_za3lpa$(0).loc.col]);
    }var stop = this.units.size;
    for (var i = 0; i < stop; i++) {
      this.counter_0 = this.counter_0 + 1 | 0;
      if (this.counter_0 === this.units.size) {
        this.counter_0 = 0;
      }if (Kotlin.isType(this.units.get_za3lpa$(this.counter_0), PWorker)) {
        return mutableListOf([this.units.get_za3lpa$(this.counter_0).loc.row, this.units.get_za3lpa$(this.counter_0).loc.col]);
      }}
    return mutableListOf([-1, -1]);
  };
  PlayerUnits.prototype.getNextSoldier = function () {
    if (this.units.size === 0) {
      return mutableListOf([-1, -1]);
    } else if (this.units.size === 1 && Kotlin.isType(this.units.get_za3lpa$(0), PSoldier)) {
      return mutableListOf([this.units.get_za3lpa$(0).loc.row, this.units.get_za3lpa$(0).loc.col]);
    }var stop = this.units.size;
    for (var i = 0; i < stop; i++) {
      this.counter_0 = this.counter_0 + 1 | 0;
      if (this.counter_0 === this.units.size) {
        this.counter_0 = 0;
      }if (Kotlin.isType(this.units.get_za3lpa$(this.counter_0), PSoldier)) {
        return mutableListOf([this.units.get_za3lpa$(this.counter_0).loc.row, this.units.get_za3lpa$(this.counter_0).loc.col]);
      }}
    return mutableListOf([-1, -1]);
  };
  PlayerUnits.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerUnits',
    interfaces: []
  };
  function PNRGPlant(location) {
    NRGPlant.call(this);
    this.loc_fqatzk$_0 = location;
    this.use_fq503b$_0 = true;
    this.owner_e1ke1p$_0 = 1;
    this.icon_9ilsrv$_0 = 'pP';
  }
  Object.defineProperty(PNRGPlant.prototype, 'loc', {
    get: function () {
      return this.loc_fqatzk$_0;
    },
    set: function (loc) {
      this.loc_fqatzk$_0 = loc;
    }
  });
  Object.defineProperty(PNRGPlant.prototype, 'use', {
    get: function () {
      return this.use_fq503b$_0;
    },
    set: function (use) {
      this.use_fq503b$_0 = use;
    }
  });
  Object.defineProperty(PNRGPlant.prototype, 'owner', {
    get: function () {
      return this.owner_e1ke1p$_0;
    },
    set: function (owner) {
      this.owner_e1ke1p$_0 = owner;
    }
  });
  Object.defineProperty(PNRGPlant.prototype, 'icon', {
    get: function () {
      return this.icon_9ilsrv$_0;
    },
    set: function (icon) {
      this.icon_9ilsrv$_0 = icon;
    }
  });
  PNRGPlant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PNRGPlant',
    interfaces: [NRGPlant]
  };
  function PSoldier(location) {
    Soldier.call(this);
    this.loc_dcq6y2$_0 = location;
    this.use_dckd1t$_0 = true;
    this.drive_k3m1xo$_0 = true;
    this.owner_pdxpvn$_0 = 1;
    this.icon_c69l39$_0 = 'pS';
  }
  Object.defineProperty(PSoldier.prototype, 'loc', {
    get: function () {
      return this.loc_dcq6y2$_0;
    },
    set: function (loc) {
      this.loc_dcq6y2$_0 = loc;
    }
  });
  Object.defineProperty(PSoldier.prototype, 'use', {
    get: function () {
      return this.use_dckd1t$_0;
    },
    set: function (use) {
      this.use_dckd1t$_0 = use;
    }
  });
  Object.defineProperty(PSoldier.prototype, 'drive', {
    get: function () {
      return this.drive_k3m1xo$_0;
    },
    set: function (drive) {
      this.drive_k3m1xo$_0 = drive;
    }
  });
  Object.defineProperty(PSoldier.prototype, 'owner', {
    get: function () {
      return this.owner_pdxpvn$_0;
    },
    set: function (owner) {
      this.owner_pdxpvn$_0 = owner;
    }
  });
  Object.defineProperty(PSoldier.prototype, 'icon', {
    get: function () {
      return this.icon_c69l39$_0;
    },
    set: function (icon) {
      this.icon_c69l39$_0 = icon;
    }
  });
  PSoldier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PSoldier',
    interfaces: [Soldier]
  };
  function PWorker(location) {
    Worker.call(this);
    this.loc_rn75m$_0 = location;
    this.use_rt11v$_0 = true;
    this.drive_nwl0j4$_0 = true;
    this.owner_t6woh3$_0 = 1;
    this.icon_nr4ee9$_0 = 'pW';
  }
  Object.defineProperty(PWorker.prototype, 'loc', {
    get: function () {
      return this.loc_rn75m$_0;
    },
    set: function (loc) {
      this.loc_rn75m$_0 = loc;
    }
  });
  Object.defineProperty(PWorker.prototype, 'use', {
    get: function () {
      return this.use_rt11v$_0;
    },
    set: function (use) {
      this.use_rt11v$_0 = use;
    }
  });
  Object.defineProperty(PWorker.prototype, 'drive', {
    get: function () {
      return this.drive_nwl0j4$_0;
    },
    set: function (drive) {
      this.drive_nwl0j4$_0 = drive;
    }
  });
  Object.defineProperty(PWorker.prototype, 'owner', {
    get: function () {
      return this.owner_t6woh3$_0;
    },
    set: function (owner) {
      this.owner_t6woh3$_0 = owner;
    }
  });
  Object.defineProperty(PWorker.prototype, 'icon', {
    get: function () {
      return this.icon_nr4ee9$_0;
    },
    set: function (icon) {
      this.icon_nr4ee9$_0 = icon;
    }
  });
  PWorker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PWorker',
    interfaces: [Worker]
  };
  function RealTile() {
    Tile.call(this);
    this.blank_jywfew$_0 = false;
    this.wait_cezfcz$_0 = 0;
  }
  Object.defineProperty(RealTile.prototype, 'blank', {
    get: function () {
      return this.blank_jywfew$_0;
    },
    set: function (blank) {
      this.blank_jywfew$_0 = blank;
    }
  });
  Object.defineProperty(RealTile.prototype, 'wait', {
    get: function () {
      return this.wait_cezfcz$_0;
    },
    set: function (wait) {
      this.wait_cezfcz$_0 = wait;
    }
  });
  RealTile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RealTile',
    interfaces: [Tile]
  };
  function Resource() {
    RealTile.call(this);
    this.occ_snvo3v$_0 = true;
    this.use_snztxv$_0 = false;
    this.drive_jiejww$_0 = false;
    this.traverse_uho0ug$_0 = false;
    this.owner_e82vyx$_0 = 0;
    this.minCost_baj97p$_0 = 0;
    this.gasCost_f5s1ho$_0 = 0;
    this.nrgCost_494b56$_0 = 0;
  }
  Object.defineProperty(Resource.prototype, 'occ', {
    get: function () {
      return this.occ_snvo3v$_0;
    },
    set: function (occ) {
      this.occ_snvo3v$_0 = occ;
    }
  });
  Object.defineProperty(Resource.prototype, 'use', {
    get: function () {
      return this.use_snztxv$_0;
    },
    set: function (use) {
      this.use_snztxv$_0 = use;
    }
  });
  Object.defineProperty(Resource.prototype, 'drive', {
    get: function () {
      return this.drive_jiejww$_0;
    },
    set: function (drive) {
      this.drive_jiejww$_0 = drive;
    }
  });
  Object.defineProperty(Resource.prototype, 'traverse', {
    get: function () {
      return this.traverse_uho0ug$_0;
    },
    set: function (traverse) {
      this.traverse_uho0ug$_0 = traverse;
    }
  });
  Object.defineProperty(Resource.prototype, 'owner', {
    get: function () {
      return this.owner_e82vyx$_0;
    },
    set: function (owner) {
      this.owner_e82vyx$_0 = owner;
    }
  });
  Object.defineProperty(Resource.prototype, 'minCost', {
    get: function () {
      return this.minCost_baj97p$_0;
    },
    set: function (minCost) {
      this.minCost_baj97p$_0 = minCost;
    }
  });
  Object.defineProperty(Resource.prototype, 'gasCost', {
    get: function () {
      return this.gasCost_f5s1ho$_0;
    },
    set: function (gasCost) {
      this.gasCost_f5s1ho$_0 = gasCost;
    }
  });
  Object.defineProperty(Resource.prototype, 'nrgCost', {
    get: function () {
      return this.nrgCost_494b56$_0;
    },
    set: function (nrgCost) {
      this.nrgCost_494b56$_0 = nrgCost;
    }
  });
  Resource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Resource',
    interfaces: [RealTile]
  };
  function Soldier() {
    Unit.call(this);
    this.occ_joiryv$_0 = true;
    this.traverse_w71k70$_0 = false;
    this.minCost_vuxxjt$_0 = 20;
    this.gasCost_zaxc5c$_0 = 10;
    this.nrgCost_gbad6y$_0 = 0;
    this.health_1ezt8y$_0 = 50;
    this.commands_dkv7bu$_0 = mutableListOf(['Attack enemy']);
  }
  Object.defineProperty(Soldier.prototype, 'occ', {
    get: function () {
      return this.occ_joiryv$_0;
    },
    set: function (occ) {
      this.occ_joiryv$_0 = occ;
    }
  });
  Object.defineProperty(Soldier.prototype, 'traverse', {
    get: function () {
      return this.traverse_w71k70$_0;
    },
    set: function (traverse) {
      this.traverse_w71k70$_0 = traverse;
    }
  });
  Object.defineProperty(Soldier.prototype, 'minCost', {
    get: function () {
      return this.minCost_vuxxjt$_0;
    },
    set: function (minCost) {
      this.minCost_vuxxjt$_0 = minCost;
    }
  });
  Object.defineProperty(Soldier.prototype, 'gasCost', {
    get: function () {
      return this.gasCost_zaxc5c$_0;
    },
    set: function (gasCost) {
      this.gasCost_zaxc5c$_0 = gasCost;
    }
  });
  Object.defineProperty(Soldier.prototype, 'nrgCost', {
    get: function () {
      return this.nrgCost_gbad6y$_0;
    },
    set: function (nrgCost) {
      this.nrgCost_gbad6y$_0 = nrgCost;
    }
  });
  Object.defineProperty(Soldier.prototype, 'health', {
    get: function () {
      return this.health_1ezt8y$_0;
    },
    set: function (health) {
      this.health_1ezt8y$_0 = health;
    }
  });
  Object.defineProperty(Soldier.prototype, 'commands', {
    get: function () {
      return this.commands_dkv7bu$_0;
    },
    set: function (commands) {
      this.commands_dkv7bu$_0 = commands;
    }
  });
  Soldier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Soldier',
    interfaces: [Unit]
  };
  function Tile() {
    this.abort_h3nhzq$_0 = false;
    this.commands_xq5xn6$_0 = mutableListOf(['No commands available']);
  }
  Tile.prototype.getPNG = function () {
    return this.icon;
  };
  Object.defineProperty(Tile.prototype, 'abort', {
    get: function () {
      return this.abort_h3nhzq$_0;
    },
    set: function (abort) {
      this.abort_h3nhzq$_0 = abort;
    }
  });
  Object.defineProperty(Tile.prototype, 'commands', {
    get: function () {
      return this.commands_xq5xn6$_0;
    },
    set: function (commands) {
      this.commands_xq5xn6$_0 = commands;
    }
  });
  Tile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tile',
    interfaces: [ITile]
  };
  function Unit() {
    RealTile.call(this);
    this.occ_okw26t$_0 = true;
    this.traverse_kvwapq$_0 = false;
    this.health_guo1rg$_0 = 10;
    this.minSal_cex7zw$_0 = 0;
    this.gasSal_x5svjp$_0 = 0;
    this.nrgSal_6f13md$_0 = 0;
  }
  Object.defineProperty(Unit.prototype, 'occ', {
    get: function () {
      return this.occ_okw26t$_0;
    },
    set: function (occ) {
      this.occ_okw26t$_0 = occ;
    }
  });
  Object.defineProperty(Unit.prototype, 'traverse', {
    get: function () {
      return this.traverse_kvwapq$_0;
    },
    set: function (traverse) {
      this.traverse_kvwapq$_0 = traverse;
    }
  });
  Object.defineProperty(Unit.prototype, 'health', {
    get: function () {
      return this.health_guo1rg$_0;
    },
    set: function (health) {
      this.health_guo1rg$_0 = health;
    }
  });
  Object.defineProperty(Unit.prototype, 'minSal', {
    get: function () {
      return this.minSal_cex7zw$_0;
    },
    set: function (minSal) {
      this.minSal_cex7zw$_0 = minSal;
    }
  });
  Object.defineProperty(Unit.prototype, 'gasSal', {
    get: function () {
      return this.gasSal_x5svjp$_0;
    },
    set: function (gasSal) {
      this.gasSal_x5svjp$_0 = gasSal;
    }
  });
  Object.defineProperty(Unit.prototype, 'nrgSal', {
    get: function () {
      return this.nrgSal_6f13md$_0;
    },
    set: function (nrgSal) {
      this.nrgSal_6f13md$_0 = nrgSal;
    }
  });
  Unit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Unit',
    interfaces: [RealTile]
  };
  function Water(location) {
    RealTile.call(this);
    this.loc_6dk3n3$_0 = location;
    this.occ_6difku$_0 = false;
    this.use_6de9qu$_0 = false;
    this.drive_n0gxtl$_0 = false;
    this.traverse_jhqtyn$_0 = false;
    this.owner_hq59vm$_0 = 0;
    this.icon_fd69m2$_0 = '///';
    this.minCost_wx63ua$_0 = 0;
    this.gasCost_t1xbkb$_0 = 0;
    this.nrgCost_mkadrz$_0 = 0;
    this.health_lp4za1$_0 = 0;
    this.minSal_h9e5ih$_0 = 0;
    this.gasSal_x0u8wu$_0 = 0;
    this.nrgSal_1kk63s$_0 = 0;
  }
  Object.defineProperty(Water.prototype, 'loc', {
    get: function () {
      return this.loc_6dk3n3$_0;
    },
    set: function (loc) {
      this.loc_6dk3n3$_0 = loc;
    }
  });
  Object.defineProperty(Water.prototype, 'occ', {
    get: function () {
      return this.occ_6difku$_0;
    },
    set: function (occ) {
      this.occ_6difku$_0 = occ;
    }
  });
  Object.defineProperty(Water.prototype, 'use', {
    get: function () {
      return this.use_6de9qu$_0;
    },
    set: function (use) {
      this.use_6de9qu$_0 = use;
    }
  });
  Object.defineProperty(Water.prototype, 'drive', {
    get: function () {
      return this.drive_n0gxtl$_0;
    },
    set: function (drive) {
      this.drive_n0gxtl$_0 = drive;
    }
  });
  Object.defineProperty(Water.prototype, 'traverse', {
    get: function () {
      return this.traverse_jhqtyn$_0;
    },
    set: function (traverse) {
      this.traverse_jhqtyn$_0 = traverse;
    }
  });
  Object.defineProperty(Water.prototype, 'owner', {
    get: function () {
      return this.owner_hq59vm$_0;
    },
    set: function (owner) {
      this.owner_hq59vm$_0 = owner;
    }
  });
  Object.defineProperty(Water.prototype, 'icon', {
    get: function () {
      return this.icon_fd69m2$_0;
    },
    set: function (icon) {
      this.icon_fd69m2$_0 = icon;
    }
  });
  Object.defineProperty(Water.prototype, 'minCost', {
    get: function () {
      return this.minCost_wx63ua$_0;
    },
    set: function (minCost) {
      this.minCost_wx63ua$_0 = minCost;
    }
  });
  Object.defineProperty(Water.prototype, 'gasCost', {
    get: function () {
      return this.gasCost_t1xbkb$_0;
    },
    set: function (gasCost) {
      this.gasCost_t1xbkb$_0 = gasCost;
    }
  });
  Object.defineProperty(Water.prototype, 'nrgCost', {
    get: function () {
      return this.nrgCost_mkadrz$_0;
    },
    set: function (nrgCost) {
      this.nrgCost_mkadrz$_0 = nrgCost;
    }
  });
  Object.defineProperty(Water.prototype, 'health', {
    get: function () {
      return this.health_lp4za1$_0;
    },
    set: function (health) {
      this.health_lp4za1$_0 = health;
    }
  });
  Object.defineProperty(Water.prototype, 'minSal', {
    get: function () {
      return this.minSal_h9e5ih$_0;
    },
    set: function (minSal) {
      this.minSal_h9e5ih$_0 = minSal;
    }
  });
  Object.defineProperty(Water.prototype, 'gasSal', {
    get: function () {
      return this.gasSal_x0u8wu$_0;
    },
    set: function (gasSal) {
      this.gasSal_x0u8wu$_0 = gasSal;
    }
  });
  Object.defineProperty(Water.prototype, 'nrgSal', {
    get: function () {
      return this.nrgSal_1kk63s$_0;
    },
    set: function (nrgSal) {
      this.nrgSal_1kk63s$_0 = nrgSal;
    }
  });
  Water.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Water',
    interfaces: [RealTile]
  };
  function Worker() {
    Unit.call(this);
    this.occ_rya9wl$_0 = true;
    this.traverse_tyvqns$_0 = false;
    this.minCost_i6lpzp$_0 = 20;
    this.gasCost_m1ui9o$_0 = 10;
    this.nrgCost_2my5mu$_0 = 0;
    this.health_6funta$_0 = 20;
    this.commands_ft10v2$_0 = mutableListOf(['Gather resources', 'Abort']);
  }
  Object.defineProperty(Worker.prototype, 'occ', {
    get: function () {
      return this.occ_rya9wl$_0;
    },
    set: function (occ) {
      this.occ_rya9wl$_0 = occ;
    }
  });
  Object.defineProperty(Worker.prototype, 'traverse', {
    get: function () {
      return this.traverse_tyvqns$_0;
    },
    set: function (traverse) {
      this.traverse_tyvqns$_0 = traverse;
    }
  });
  Object.defineProperty(Worker.prototype, 'minCost', {
    get: function () {
      return this.minCost_i6lpzp$_0;
    },
    set: function (minCost) {
      this.minCost_i6lpzp$_0 = minCost;
    }
  });
  Object.defineProperty(Worker.prototype, 'gasCost', {
    get: function () {
      return this.gasCost_m1ui9o$_0;
    },
    set: function (gasCost) {
      this.gasCost_m1ui9o$_0 = gasCost;
    }
  });
  Object.defineProperty(Worker.prototype, 'nrgCost', {
    get: function () {
      return this.nrgCost_2my5mu$_0;
    },
    set: function (nrgCost) {
      this.nrgCost_2my5mu$_0 = nrgCost;
    }
  });
  Object.defineProperty(Worker.prototype, 'health', {
    get: function () {
      return this.health_6funta$_0;
    },
    set: function (health) {
      this.health_6funta$_0 = health;
    }
  });
  Object.defineProperty(Worker.prototype, 'commands', {
    get: function () {
      return this.commands_ft10v2$_0;
    },
    set: function (commands) {
      this.commands_ft10v2$_0 = commands;
    }
  });
  Worker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Worker',
    interfaces: [Unit]
  };
  _.BlankTile = BlankTile;
  _.Builder = Builder;
  _.Building = Building;
  _.EBuilder = EBuilder;
  _.EFactory = EFactory;
  _.EGasCollector = EGasCollector;
  _.EHQ = EHQ;
  _.ENRGPlant = ENRGPlant;
  _.ESoldier = ESoldier;
  _.EWorker = EWorker;
  _.Factory = Factory;
  _.GameData = GameData;
  _.GasCollector = GasCollector;
  _.GasVent = GasVent;
  _.GrassTile = GrassTile;
  _.GrassUnits = GrassUnits;
  _.GrassWorld = GrassWorld;
  _.HQ = HQ;
  _.ITile = ITile;
  _.Location = Location;
  _.Map = Map;
  _.Minerals = Minerals;
  _.Model = Model;
  _.Move = Move;
  _.NRGPlant = NRGPlant;
  _.PBuilder = PBuilder;
  _.PFactory = PFactory;
  _.PGasCollector = PGasCollector;
  _.PHQ = PHQ;
  _.PlayerBuildings = PlayerBuildings;
  _.PlayerUnits = PlayerUnits;
  _.PNRGPlant = PNRGPlant;
  _.PSoldier = PSoldier;
  _.PWorker = PWorker;
  _.RealTile = RealTile;
  _.Resource = Resource;
  _.Soldier = Soldier;
  _.Tile = Tile;
  _.Unit = Unit;
  _.Water = Water;
  _.Worker = Worker;
  Kotlin.defineModule('model', _);
  return _;
}(typeof model === 'undefined' ? {} : model, kotlin);
