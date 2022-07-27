// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.



function newString(str){
    if(str.length<=1){
        return (str);

    }
    first = str.substring(0,1);
    last = str.substring(str.length-1,str.length);
    main = str.substring(1,str.length-1);

    return (last+main+first);
}

console.log(newString("Python"));
console.log(newString("ab"));
console.log(newString("abc"));
console.log(newString("a"));



//another way is we can use charAt 

// function first_last(str1) 
//   {
//   if (str1.length <= 1)
//   {
//     return str1;
//   }
//   mid_char = str1.substring(1, str1.length - 1);
//   return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
// }
// console.log(first_last('a'));
// console.log(first_last('ab'));
// console.log(first_last('abc'));