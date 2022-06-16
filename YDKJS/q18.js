// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

const prompt = require("prompt-sync")();

var num1 = prompt("Enter the First number to get the sum->");   //prompt gives only string, have to ask.
var num2 = prompt("Enter the Second number to get the sum->");
num1 = Number(num1);
num2 = Number(num2);

if( num1 + num2 ==50 || num1 == 50 || num2 ==50)
{console.log("true");
}
else{
    console.log("false"); 
} 