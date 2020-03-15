using System;
using System.Threading;

namespace PlanetCS1 {
    class PlanetCS1 {
        int height, width, size, diff;
        Model model;
        bool enemyTurn = false;
        int gameWon = 0;
        int time = 1000;

        PlanetCS1(int height, int width, int size, int diff) {
            this.height = height;
            this.width = width;
            this.diff = diff;
            this.model = model(width, height, diff);
            Thread t1 = new Thread(new ThreadStart(mainLogic));
            t1.Start();
            Thread t2 = new Thread(new ThreadStart(backgroundLogic));
            t2.Start();
        }

        public Model getTheModel() {
            return this.model;
        }

        void mainLogic() {
            while (gameWon == 0) {
                Thread.Sleep(50);
                model.processPlayerMoves();
                if (enemyTurn) {
                    model.processEnemyMoves();
                    enemyTurn = false;   
                }
            }
            if (gameWon == 1) {
                Console.WriteLine("You won!!");
            }
            else if (gameWon == 2) {
                Console.WriteLine("You lost, too bad!");
            }
        }

        void backgroundLogic() {
            while (true) {
                model.processPlayerWaits();
                model.processPlayerBuildQueue();
                model.processPlayerCreationQueue();
                model.processPlayerGatherQueue();
                model.processDeadUnits();
                model.processDeadBuildings();
                Thread.Sleep(950);
            }
        }

        void enemyTurnTimer() {
            while (true) {
                enemyTurn = true;
                Thread.Sleep(time - (diff * (time / 4)));
            }
        }


        static void Main(string[] args) {
            Console.WriteLine("PlanetCS1 by Shane Stacy");
            Console.WriteLine("Alpha Version");
            if (args.Length < 4) {
                Console.WriteLine("Launch failure:\n");
                Console.WriteLine("Missing some arguments\n");
            }
            var controller = new PlanetCS1(Int32.Parse(args[0]), Int32.Parse(args[1]), Int32.Parse(args[2]), Int32.Parse(args[3]));
        }
    }
}
