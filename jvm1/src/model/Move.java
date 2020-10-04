/*
Author:         Shane Stacy
Description:    This class regulates the legal movement for all mobile tiles.
*/

package model;

public class Move {

    Location from;
    Location to;

    public Move(Location from2, Location to2) {
        from = from2;
        to = to2;
    }

    private boolean isBasicallyValid(Move m, ITile tile[][]) {
        if ((from != to) && isOnTheBoard(m, tile)) {
            return true;
        }
        return false;
    }

    private boolean isOnTheBoard(Move m, ITile tile[][]) {
        if (tile.length > m.to.getRow() && tile[0].length > m.to.getColumn()) {
            return true;
        }
        return false;
    }

    public boolean isValidMoveForBuilder(Move m, ITile tile[][]) {
        if (isBasicallyValid(m, tile)) {
            return true;
        }
        return false;
    }
}
