// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
// //one method
// function upper(str){
//     str = str.split(" ");
//     for(var i=0;i<str.length;i++){
//         str[i] = str[i].charAt(0).toUpperCase()+str[i].substring(1);
//     }
//     return str.join(" ");
// }

// console.log(upper("the queenn"));
// console.log(upper("the"));
// console.log(upper("the quick brown fox"));

//another method

function upper(str){
    str = str.split(' ').map((word)=> word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
    return str;
}


console.log(upper("the queenn"));
console.log(upper("the"));
console.log(upper("the quick brown fox"));