"use strict";

const Player = require("./player");

class AI extends Player {
    constructor(){
        super();
        this.name = "Computer";
    }
    // generates random number to correlate with given number of gesture. Ensures rounding down to a whole number. 
    generateRandomGesture() {
        let randomGesture = Math.floor(Math.random() * 4);
        return randomGesture;
    }
}


module.exports = AI;

// 0 = rock
// 1 = paper
// 2 = scissors
// 3 = lizard
// 4 = spock