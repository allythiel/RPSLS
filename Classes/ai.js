"use strict";

const Player = require("./player");

class AI extends Player() {
    constructor(name, score){
    super(name, score);
    }
    // generates random number to correlate with given number of gesture. Ensures rounding down to a whole number. 
    generateRandomGesture() {
        let randomGesture = Math.floor(Math.random());
        return randomGesture;
    }
}


module.exports = AI;

// 0 = rock
// 1 = paper
// 2 = scissors
// 3 = lizard
// 4 = spock