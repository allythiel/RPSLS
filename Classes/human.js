"use strict";

const Player = require("./player");
const prompt = require("prompt-sync")();

 class Human extends Player {
     constructor() {
         super();
         let userName = prompt("What is your name?");
         this.name = userName
     }
     pickGestures() {
        console.log("Select the number that corresponds to the gesture you'd like to play.");

        let gestureChoice = prompt("1 - ROCK, 2 - PAPER, 3 - SCISSORS, 4 - LIZARD, 5 - SPOCK ");
        if(gestureChoice === "1"){
            this.chosenGesture = "Rock";
        }
        else if(gestureChoice === "2") {
            this.chosenGesture = "Paper";
        }
        else if(gestureChoice === "3") {
            this.chosenGesture = "Scissors";
        }
        else if(gestureChoice === "4") {
            this.chosenGesture = "Lizard";
        }
        else if(gestureChoice === "5"){
            this.chosenGesture = "Spock";
        }
        return this.chosenGesture;
    }
 }

 module.exports = Human;