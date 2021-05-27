"use strict";

const Player = require("./player");
const prompt = require("prompt-sync")();

 class Human extends Player {
     constructor() {
         super();
         let userName = prompt("What is your name?");
         this.name = userName
     }
 }

 module.exports = Human;