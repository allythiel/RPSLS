"use strict";

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.chosenGesture = ""
        this.gestureArrary = ["rock", "paper", "scissors", "lizard", "spock"];
    }
    pickGestures(gestureArr) {
        let runningTotal = 0;

        for(let i =0; i < gestureArr.length; i++) {
            let result = this.chosenGesture(gestureArr[i]);
            runningTotal += result;
        }
        return runningTotal;
    }
}

module.exports = Player;