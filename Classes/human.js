"use strict";

const Player = require("./player");
const prompt = require("prompt-sync")();
// const promptFor = require("./game");

 class Human extends Player {
     constructor() {
         super();
         let userName = prompt("What is your name?");
         this.name = userName
     }
     pickGestures() {
        console.log("Select the number that corresponds to the gesture you'd like to play.");

        let gestureChoice = prompt("0 - ROCK, 1 - PAPER, 2 - SCISSORS, 3 - LIZARD, 4 - SPOCK ");
        if(gestureChoice === "0"){
            this.chosenGesture = "Rock";
        }
        else if(gestureChoice === "1") {
            this.chosenGesture = "Paper";
        }
        else if(gestureChoice === "2") {
            this.chosenGesture = "Scissors";
        }
        else if(gestureChoice === "3") {
            this.chosenGesture = "Lizard";
        }
        else if(gestureChoice === "4"){
            this.chosenGesture = "Spock";
        }
        return this.chosenGesture;
    }
 }

 module.exports = Human;