"use strict";

class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
        this.chosenGesture = ""
        this.gestureArrary = ["rock", "paper", "scissors", "lizard", "spock"];
    }
}

module.exports = Player;