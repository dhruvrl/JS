// Write a JavaScript program to reverse the order of the characters in the string.
// one method 
function reverseStriong(str) {
    return str.split('').reverse().join('');
}

console.log(reverseStriong('php')); 
console.log(reverseStriong('foobar'));

//another method 

function reverseStriong(str) {
    str = [...str].reverse().join('');
    return str;

}

console.log(reverseStriong('php')); 
console.log(reverseStriong('foobar'));
