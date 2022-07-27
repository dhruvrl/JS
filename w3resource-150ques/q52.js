// Write a JavaScript program to convert the letters of a given string in alphabetical order.

function convert_alphabetically(str){
    return str.split("").sort().join("");
}

console.log(convert_alphabetically("Python"));

console.log(convert_alphabetically("Exercises"));
