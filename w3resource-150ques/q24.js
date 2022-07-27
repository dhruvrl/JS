// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back. 

function check(str){

    return str.charAt(0)+str+str.charAt(0);
}

console.log(check("Python"));
console.log(check("ab"));
console.log(check("abc"));
console.log(check("a"));
