// Write a JavaScript program to create a string using the middle
// three characters of a given string of odd length. The string length must be greater or equal to three

function middle_three(str){
    if(str.length>=3 && str.length%2!=0){
        mid = Math.floor(str.length/2);
        return str.substring((mid-1) , (mid +2));
    }
    return str;
}

console.log(middle_three('abcdefg'));
console.log(middle_three('HTML5'));
console.log(middle_three('Python'));
console.log(middle_three('PHP'));
console.log(middle_three('Exercises'));