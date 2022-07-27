//questions on JS --link--> https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

//Write a JavaScript program to display the current day and time in the following format.

const d = new Date(); 
var n = d.getDay();
//console.log(n);
switch(n){
  case 1: console.log("Today is : Monday.");
  break;
  case 2: console.log("Today is : Tuesday.");
  break;
  case 3: console.log("Today is : Wednesday.");
  break;
  case 4: console.log("Today is : Thursday.");
  break;
  case 5: console.log("Today is : Friday.");
  break;
  case 6: console.log("Today is : Saturday.");
  break;
  case 0: console.log("Today is : Sunday.");
  break;
}

var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var time;
if(h>12 && h<25){
  time = "PM";
  h=h-12;
}
else {
   time = "AM";
}
console.log(`Current Time : ${h} ${time} : ${m} : ${s}`);
