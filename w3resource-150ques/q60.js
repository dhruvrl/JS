// Write a JavaScript program to create a new string without the first and last character of a given string. 

function without_first_end(str){
    main = str.substring(1,str.length-1);
    return main;
}
console.log(without_first_end('JavaScript'));
console.log(without_first_end('JS'));
console.log(without_first_end('PHP'));