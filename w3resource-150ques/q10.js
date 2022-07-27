//Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

const prompt = require("prompt-sync")();
const first= prompt("Give the First Number ");
const second= prompt("Give the Second Number ");
function multiply(){
    console.log(first*second);
}

function divide(){
    console.log(first/second);
}

multiply();
divide();