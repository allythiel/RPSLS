"use strict";

const Player = require("./player");

 class Human extends Player {
     constructor(name, score) {
         super(name, score);
     }
 }

 module.exports = Human;