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
        this.selectGesture();
        this.determineWinner();
        this.finalScore();
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
    // PROMPTS PLAYER(HUMAN OR AI) TO SELECT A GESTURE(NUMBER). 
    selectGesture(){
        this.playerOne.pickGestures();
        this.playerTwo.pickGestures();
    }

    
    //DETERMINES WINNER OF EACH ROUND. ADDS TO CURRENT COUNT.
    determineWinner(){
        if(this.playerOne.chosenGesture == "Rock" && (this.playerTwo.chosenGesture == "Scissors" || "Lizard")){
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score += 1;
        }
        else if(this.playerOne.chosenGesture == "Paper" && (this.playerTwo.chosenGesture == "Rock" || "Spock")){
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score += 1;
        }
        else if(this.playerOne.chosenGesture == "Scissors" && (this.playerTwo.chosenGesture == "Paper" || "Lizard")){
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score += 1;
        }
        else if(this.playerOne.chosenGesture == "Lizard" && (this.playerTwo.chosenGesture == "Paper" || "Spock")){
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score += 1;
        }
        else if(this.playerOne.chosenGesture == "Spock" && (this.playerTwo.chosenGesture == "Rock" || "Scissors")){
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score += 1;
        }
        else(
            console.log(this.playerTwo.name + " wins this round!")
        );


    }
    //DETERMINES WINNER OF GAME
    finalScore(){
        while(this.playerOne.score < 3 && this.playerTwo.score < 3){
            this.selectGesture();
            this.determineWinner();
        }
        if(this.playerOne.score > this.playerTwo.score) {
            console.log(this.playerOne.name + " wins this game!");
            }
            else {
            console.log(this.playerTwo.name + " wins this game!");
            }
         }
}

module.exports = Game;