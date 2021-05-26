"use strict";

const Player = require("./player");

class AI extends Player() {
    constructor(name, score){
    super(name, score);
    }
    // Generates Random Number. Rounds down to nearest whole number to assign to value. 
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