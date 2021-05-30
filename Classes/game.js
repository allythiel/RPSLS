"use strict";

const Human = require('./human');
const AI = require('./ai');
const Player = require('./player');
const prompt = require('prompt-sync')(); 
const { generateRandomGesture } = require('./ai');

class Game {
    constructor() {
        this.playerOne = new Human;
        this.playerTwo = new Player; 
    }
    runGame() { // "main" method
        this.displayrules();
        this.selectPlayers();
        this.playerOneSelectGesture();
        this.playerTwoSelectGesture();
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
                this.playerTwo = new AI();
            break;
            default:
            return (this.runGame);
        }
    }
    // PROMPT PLAYER TO SELECT GESTURE(NUMBER). 
    playerOneSelectGesture(){
        this.playerOne.pickGestures();
    }

    // PROMPT SECOND PLAYER TO SELECT GESTURE, OR SELECT RANDOM NUMBER (AI)
    playerTwoSelectGesture(){
        if(this.selectPlayers.playerSelection === "computer"){
            let aiChoice = generateRandomGesture();
            AI.generateRandomGesture();
            return aiChoice;
        }
        else if(this.selectPlayers.playerSelection === "human"){
            let gestureChoice2 = prompt("1 - ROCK, 2 - PAPER, 3 - SCISSORS, 4 - LIZARD, 5 - SPOCK ");
            if(gestureChoice2 === 1){
                gestureChoice2 = "Rock";
            }
            else if(gestureChoice2 === 2) {
                gestureChoice2 = "Paper";
            }
            else if(gestureChoice2 === 3) {
                gestureChoice2 = "Scissors";
            }
            else if(gestureChoice2 === 4) {
                gestureChoice2 = "Lizard";
            }
            else if(gestureChoice2 === 5){
                gestureChoice2 = "Spock";
            }
            return gestureChoice2;
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