//Write a JavaScript program to get the current date.

var date= new Date();
var d = date.getUTCDate();
var m = date.getMonth();
var y =  date.getFullYear();
if(d< 10){
    d = '0'+d;
}
if(m< 10){
    m = '0'+m;
}
console.log(`${m}-${d}-${y}`)