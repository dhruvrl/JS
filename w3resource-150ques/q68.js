// Write a JavaScript program to create a new string taking the first and last n characters from a given string.
// The string length must be greater or equal to n.

function f_and_l(str, n){
    if(str.length>n){
        return str.substring(0,n)+str.substring(str.length-n,str.length);
    }
}
console.log(f_and_l("JavaScript", 2));
console.log(f_and_l("JavaScript", 3));