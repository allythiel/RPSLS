"use strict";

const Player = require("./player");

class AI extends Player {
    constructor(){
        super();
        this.name = "Computer";
    }
    // generates random number to correlate with given number of gesture. Ensures rounding down to a whole number. 
    pickGestures() {
        let randomGesture = Math.floor(Math.random() * 5);
        return randomGesture;
    }
}


module.exports = AI;
