//Write a JavaScript exercise to create a variable using a user-defined name.

const prompt = require("prompt-sync")();

var name = prompt("Enter the variable name you want to use for this code->");

var test = 50;

this[name] = test;

console.log(`Your variable name is "${name}" having the value ${test}`) 