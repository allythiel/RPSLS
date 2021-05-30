"use strict";

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.chosenGesture = ""
        this.gestureArrary = ["rock", "paper", "scissors", "lizard", "spock"];
    }
}

module.exports = Player;