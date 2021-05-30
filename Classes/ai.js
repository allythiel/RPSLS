"use strict";

const Player = require("./player");

class AI extends Player {
    constructor(){
        super();
        this.name = "Computer";
    }
    // generates random number to correlate with given number of gesture. Ensures rounding down to a whole number. 
    pickGestures() {
        let randomGesture = Math.floor(Math.random() * 5);
        if(randomGesture === 1){
            this.chosenGesture === "Rock";
        }
        if(randomGesture === 2){
            this.chosenGesture === "Paper";
        }
        if(randomGesture === 3){
            this.chosenGesture === "Scissors";
        }
        if(randomGesture === 4){
            this.chosenGesture === "Lizard";
        }
        else if(randomGesture === 5){
            this.chosenGesture === "Spock";
        }
        return this.chosenGesture;
    }

}


module.exports = AI;
