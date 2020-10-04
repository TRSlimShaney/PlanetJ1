
//  binary semaphore
export class BinarySemaphore {
    //  whether or not the semaphore is available
    //  !available is locked, available is unlocked
    //  while locked, caller must wait until unlocked
    private available: boolean
    //  a name given to the sempahore for debug purposes
    private name: string

    constructor(name: string) {
        this.available = true;
        this.name = name
    }

    //  lock the semaphore
    lock() {
        while (!this.available) {
            //  busy wait until available
        }
        //  claim control of sempahore
        this.available = false
    }

    //  unlock the semaphore
    unlock() {
        //  release control of semaphore
        this.available = true
    }

    //  return the name of the semaphore
    getName(): string {
        return this.name
    }
}



//  counting semaphore
export class CountingSemaphore {
    //  number of locks available
    //  capacity is initialized at instantiation
    //  when available > 0, semaphore has locks still available
    //  when available = 0, semaphore has no locks available
    //  while no locks available, caller must wait until available
    available: number
    //  a name given to the semaphore for debug purposes
    private name: string

    constructor(capacity: number, name: string) {
        this.available = capacity
        this.name = name
    }

    //  lock the semaphore
    lock() {
        while (this.available === 0) {
            //  busy wait until available
        }
        //  claim control of sempahore
        --this.available
    }

    //  unlock the semaphore
    unlock() {
        //  release control of semaphore
        ++this.available
    }

    //  return the name of the semaphore
    getName(): string {
        return this.name
    }
}


//  c-style division for javascript
export function IntegerDivision(a: number, b: number) {
    //  perform the js style division
    const result = a / b
    //  if the result is greater than or equal to zero
    if (result >= 0) {
        //  round the result down
        //  return
        return Math.floor(result)
    }
    else {
        //  if the result is less than zero, round the result up
        //  return
        return Math.ceil(result)
    }
}




export function PrintLine(msg: string) {
    console.log(msg)
}


export class Logger {

    constructor(
        private enable: boolean,
        private preface: string,
        private name: string) {}

    debug(msg: string) {
        if (this.enable) {
            console.log(this.base("DEBUG") + msg)
        }
    }

    error(msg: string) {
        if (this.enable) {
            console.log(this.base("ERROR") + msg)
        }
    }

    entering(routine_name: string) {
        if (this.enable) {
            console.log(this.base("ENTER") + "Entering " + routine_name)
        }
    }

    getName() : string {
        return name
    }

    private base(type: string) {
        return Date.now().toString() + "::" + type + "::" + this.preface + ":: "
    }
}


export class Constants {
    //  status codes
    readonly sta_normal = 0  //  general success
    readonly sta_fail = -1  //  general failure
    readonly sta_notfound = -2  //  search did not find result
    readonly sta_badkey = -3  //  key did not exist
    readonly sta_novalue = -4  //  no value returned for key
    readonly sta_notconnected = -5  //  not currently connected
    readonly sta_timeout = -6  //  timed out waiting

    //  viewscreen modes
    readonly view_mode = 0
    readonly unit_mode = 1

    //  players
    readonly PLAYER_1 = 1
    readonly CPU = 2
}



export class ALocation {
    row : number
    col : number

    constructor(row : number, col : number) {
        this.row = row
        this.col = col
    }

    setLoc(row : number, col : number) {
        this.row = row
        this.col = col
    }
}






export class GameData {
    minerals : number
    gas : number
    nrg : number

    constructor(diff : number) {
        if (diff === -1) {
            this.minerals = 999999
            this.gas = 999999
            this.nrg = 999999
        }
        else if (diff === 0) {
            this.minerals = 200
            this.gas = 200
            this.nrg = 200
        }
    }

    addResource(minDiff : number, gasDiff : number, nrgDiff : number) {
        this.minerals += minDiff
        this.gas += gasDiff
        this.nrg += nrgDiff
    }

    subResource(minDiff : number, gasDiff : number, nrgDiff : number) {
        this.minerals -= minDiff
        this.gas -= gasDiff
        this.nrg -= nrgDiff
    }

    getResources() : Array<number> {
        return Array<number>(this.minerals, this.gas, this.nrg)
    }
}





export class Move {
    from : ALocation
    to : ALocation

    constructor(from : ALocation, to : ALocation) {
        this.from = from
        this.to = to
    }
}