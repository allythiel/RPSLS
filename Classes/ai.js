"use strict";

const Player = require("./player");

class AI extends Player() {
    constructor(name, score){
    super(name, score);
    }
    generateRandomGesture() {
        let randomGesture = Math.floor(Math.random();
        return randomGesture;
    }
}


module.exports = AI;

