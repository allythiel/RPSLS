"use strict";

const Human = require('./human');
const AI = require('./ai');
const Player = require('./player');
const prompt = require('prompt-sync')(); 

class Game {
    constructor() {
        this.playerOne = new Human;
        this.playerTwo = new Player; 
    }
    runGame() { // "main" method
        this.displayrules();
        this.selectPlayers();
        this.selectGesture();
        this.determineWinner();
    }
    displayrules() {
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
        console.log("Two players will compete using gestures to battle each other");
        console.log("To play, pick a number that corresponds to a gesture that you would like to play");
        console.log("Best of three, wins!");
    }
    // PLAYER VS PLAYER OR PLAYER VS COMPUTER SELECTION
    selectPlayers() { 
        let playerSelection = prompt("Would you like to play against another human or a computer?");
        switch(playerSelection){
            case "human":
                this.playerTwo = new Human();
            break;
            case "computer":
                this.playerTwo = new AI;
            break;
            default:
            return (this.runGame);
        }

    }
    // PROMPT PLAYER TO SELECT GESTURE(NUMBER). ELSE, RETRIEVE RANDOM NUMBER FOR AI SELECTION.
    selectGesture(){
        console.log("Select the number that corresponds to the gesture you'd like to play.");
        let gestureChoice = prompt("1 - ROCK, 2 - PAPER, 3 - SCISSORS, 4 - LIZARD, 5 - SPOCK ");
        if(gestureChoice === 1){
            gestureChoice = "Rock";
        }
        else if(gestureChoice === 2) {
            gestureChoice = "Paper";
        }
        else if(gestureChoice === 3) {
            gestureChoice = "Scissors";
        }
        else if(gestureChoice === 4) {
            gestureChoice = "Lizard";
        }
        else if(gestureChoice === 5){
            gestureChoice = "Spock";
        }
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