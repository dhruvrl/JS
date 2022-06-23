//Write a JavaScript program where the program takes a random integer between 1 to 10, the user
// is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 

var rand = Math.ceil((Math.random()*10));  //generate random number from 1 to 10;

console.log(rand);
const prompt = require("prompt-sync")();
const guess= prompt("Give the number bnetween 1 to 10 -> ");

if( guess === rand){
    console.log("Matched");
}
else{
    console.log("Not Matched")
}

// === when I use this I am getting wrong output. 
//but when I use == then I receive the desired result.