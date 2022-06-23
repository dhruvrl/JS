//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit

const prompt = require("prompt-sync")();
console.log("What you want to do....\n1. Fahrenheit to Celcuius or \n2. Celcius to Fahrenheit \nEnter the number for your choice from 1 and 2");
const num = prompt("Your Choice->> ");
var Fahrenheit;
var celsius;
if( num == 1){
    Fahrenheit= prompt("Temp In Fahrenheit-> ");
    FahToCel();
}
else{
    celsius= prompt("Temp In Celsius -> ");
    CelToFah();
}

function FahToCel(){
    var cel = ((Fahrenheit - 32 )/9)*5;
    console.log(`Temp in Celcius = ${cel} \xB0C`)
}



function CelToFah(){
    var fah = ((9* celsius)/5)+32;
    console.log(`Temp in Fahrenheit  = ${fah} \xB0F`)
}