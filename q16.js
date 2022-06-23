//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.  

const prompt = require("prompt-sync")();

var num1 = prompt("Enter the First number to get the sum->");   //prompt gives only string, have to ask.
var num2 = prompt("Enter the Second number to get the sum->");
num1 = Number(num1);
num2 = Number(num2);

if(num1 == num2 ){
    console.log(`Program is triple their sum as nnumbers are same ${(num1+num2)*3}`);
}
else{
    console.log(`Sum is  ${num1+num2}`);
    
}