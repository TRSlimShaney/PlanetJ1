using System;
using System.Collections.Generic;

namespace PlanetCS1 {
    class Model {
        int width;
        int height;
        int diff;
        int gameWon;

        GrassWorld world;
        int size;
        GrassUnits units;
        Map combined;
        Map buffer;
        PlayerUnits playerUnits;
        PlayerBuildings playerBuildings;
        List<ITile> enemyUnits;
        List<Move> enemyMovesQueue;
        List<Move> playerMovesQueue;
        List<ITile> playerBuildQueue;
        List<ITile> playerCreationQueue;
        List<ITile> playerGatherQueue;
        GameData playerData;
        Location viewscreen;

        public Model(int width, int height, int diff) {
            this.width = width;
            this.height = height;
            this.diff = diff;
            this.world = new GrassWorld();
            this.units = new GrassUnits();
            this.size = this.world.size;
            this.combined = new Map(this.size);
            this.buffer = new Map(this.width);
            this.playerUnits = new PlayerUnits();
            this.playerBuildings = new PlayerBuildings();
            this.enemyUnits = new List<ITile>();
            this.enemyMovesQueue = new List<Move>();
            this.playerMovesQueue = new List<Move>();
            this.playerBuildQueue = new List<ITile>();
            this.playerCreationQueue = new List<ITile>();
            this.playerGatherQueue = new List<ITile>();
            this.playerData = new GameData(this.diff);
            this.viewscreen = new Location((this.size/2), (this.size/2));
            this.gameWon = 0;
            setupUnits();
            setupBuildings();
            updateView(5, 5);
        }

        void setupUnits() {
            for (int i = 0; i < this.size; ++i) {
                for (int j = 0; j < this.size; ++j) {
                    ITile unit = this.units.tiles[i][j];
                    if (unit.owner == 1) {
                        this.playerUnits.units.Add(unit);
                    }
                    else if (unit.owner == 2) {
                        this.enemyUnits.Add(unit);
                    }
                }
            }
        }

        void setupBuildings() {
            for (int i = 0; i < this.size; ++i) {
                for (int j = 0; j < this.size; ++j) {
                    ITile building = this.world.tiles[i][j];
                    if (building.owner == 1) {
                        this.playerBuildings.units.Add(building);
                    }
                    else if (building.owner == 2) {
                        //enemyBuildings
                    }
                }
            }
        }

        public List<int> getViewScreen() {
            return new List<int>(){this.viewscreen.row, this.viewscreen.col};
        }

        public Boolean moveViewUp() {
            return updateViewDiff(-1, 0);
        }

        public Boolean moveViewDown() {
            return updateViewDiff(1, 0);
        }

        public Boolean moveViewLeft() {
            return updateViewDiff(0, -1);
        }

        public Boolean moveViewRight() {
            return updateViewDiff(0, 1);
        }

        Boolean updateViewDiff(int diffRow, int diffCol) {
            Location location = new Location(this.viewscreen.row + diffRow, this.viewscreen.col + diffCol);
            return updateView(location);
        }

        Boolean updateView(Location location) {
            Boolean over = false;

            if (location.row < this.height/2) {
                location.row = this.height/2;
                over = true;
            }
            if (location.row > size - this.height/2 - 1) {
                location.row = size - this.height/2 - 1;
                over = true;
            }
            if (location.col < this.width/2) {
                location.col = this.width/2;
                over = true;
            }
            if (location.col > size - this.width/2 - 1) {
                location.col = size - this.width/2 - 1;
                over = true;
            }
            this.viewscreen.setLoc(location.row, location.col);
            updateBuffer();
            if (over) {
                return false;
            }
            return true;
        }

        Boolean updateView(int row, int col) {
            Location location = new Location(row, col);
            return updateView(location);
        }

        List<int> jumpTo(int row, int col) {
            int selectRow = 5;
            int selectCol = 5;
            if (!updateView(row, col)) {
                selectRow = row - this.viewscreen.row + this.height/2;
                selectCol = col - this.viewscreen.col + this.width/2;
            }
            return new List<int>(){selectRow, selectCol};
        }

        ITile spawnPWorkerInt(int row, int col) {
            Location location = new Location(row, col);
            PWorker pworker = new PWorker(location);
            return spawnTile(location, pworker);
        }

        ITile spawnPBuilderInt(int row, int col) {
            Location location = new Location(row, col);
            PBuilder pbuilder = new PBuilder(location);
            return spawnTile(location, pbuilder);
        }

        ITile spawnPSoldierInt(int row, int col) {
            Location location = new Location(row, col);
            PSoldier psoldier = new PSoldier(location);
            return spawnTile(location, psoldier);
        }

        ITile spawnPFactoryInt(int row, int col) {
            Location location = new Location(row, col);
            PFactory pfactory = new PFactory(location);
            return spawnTile(location, pfactory);
        }

        ITile spawnEBuilderInt(int row, int col) {
            Location location = new Location(row, col);
            EBuilder ebuilder = new EBuilder(location);
            return spawnTile(location, ebuilder);
        }

        ITile spawnTile(Location location, ITile tile) {
            if (!isOnBoard(location) || this.units.tiles[location.row][location.col].occ || !this.world.tiles[location.row][location.col].traverse) {
                Location nullLocation = new Location(-1, -1);
                BlankTile nullTile = new BlankTile(nullLocation);
                return nullTile;
            }
            if (tile is Unit) {
                if (tile.owner == 1) {
                    this.playerUnits.units.Add(tile);
                }
                else if (tile.owner == 2) {
                    this.enemyUnits.Add(tile);
                }
            }
            else if (tile is Building) {
                if (tile.owner == 1) {
                    this.playerBuildings.units.Add(tile);
                }
                else if (tile.owner == 2) {
                    //enemyBuildings.add(tile);
                }
            }
            return tile;
        }
    }
}