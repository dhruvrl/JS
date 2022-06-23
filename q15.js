//Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference. 

const prompt = require("prompt-sync")();

var num = prompt("Enter the number to get the difference->");

if(num < 13){
    console.log(13-num);
}
else{
    console.log(Math.pow(num-13,2));
}