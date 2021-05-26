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
        prompt("Would you like to play against another human or a computer?");
        // SWITCH CASE

    }
    // PROMPT PLAYER TO SELECT GESTURE(NUMBER). ELSE, RETRIEVE RANDOM NUMBER FOR AI SELECTION.
    selectGesture(number){
        let rock = 0;
        let paper = 1;
        let scissors = 2;
        let lizard = 3;
        let spock = 4;
        prompt("Select the number that corresponds to the gesture you'd like to play." + "\n", "0 - ROCK" + "\n", "1 - PAPER" + "\n", "2 - SCISSORS" + "\n", "3 - LIZARD" + "\n", "4 - SPOCK" + "\n");


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