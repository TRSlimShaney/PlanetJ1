package Model.Neutral

import Model.Location
import Model.Abstract.Unit

abstract class Builder() : Unit() {
    override var occ = true
    override var traverse = false
}