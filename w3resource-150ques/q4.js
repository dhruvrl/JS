//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

const l1 = 5;
const l2 = 6;
const l3 = 7;

var p = (l1+l2+l3 )/2;//parameter of triangle
console.log(p); 
// var ra = (p*(p-l1)*(p-l2)*(p-l3))
// console.log(ra);
var aot = Math.sqrt(p*(p-l1)*(p-l2)*(p-l3))
console.log(aot)