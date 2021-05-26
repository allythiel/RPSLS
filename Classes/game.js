"use strict";

const Human = require('./human');
const AI = require('./ai');
const prompt = require('prompt-sync')(); 

class Game {
    constructor() {
        
    }
    runGame() { // "main" method
        displayrules();
        selectPlayers()
        selectGesture()
        determineWinner()
       
    }
    displayrules() {
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
        console.log("Two players will compete using gestures to battle each other");
        console.log("To play, pick a number that corresponds to a gesture that you would like to play");
        console.log("Best of three, wins!");
    }
    // PLAYVER VS PLAYER OR PLAYVER VS COMPUTER SELECTION
    selectPlayers() { 

    }
    // PROMPT PLAYER TO SELECT GESTURE(NUMBER). ELSE, RETRIEVE RANDOM NUMBER FOR AI SELECTION.
    selectGesture(){

    }
    //DETERMINES WINNER OF EACH ROUND. ADDS TO CURRENT COUNT.
    determineWinner(){

    }
    //DETERMINES WINNER OF GAME
    finalScore(){

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