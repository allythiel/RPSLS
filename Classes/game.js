"use strict";

const Human = require('./human');
const AI = require('./ai');
const prompt = require('prompt-sync')(); 

class Game {
    constructor() {
        
    }
    runGame() { // "main" method
        displayrules();
       
    }
}

module.exports = Game;

// Rock crushes Scissors
// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock 