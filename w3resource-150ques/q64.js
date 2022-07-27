// Write a JavaScript program to concatenate two strings and return the result. 
//If the length of the strings are not same then remove the characters from the longer string.

// function str_con_cat(str1,str2){
//     if(str1.length>str2.length){
//         str1 = str1.substring(0,str2.length);
//     }
//     if(str1.length<str2.length){
//         str2 = str2.substring(0,str1.length);
//     }

//     return str1+str2;

// }

// console.log(str_con_cat("Python", "JS"));
// console.log(str_con_cat("ab", "cdef"));

// another way for different string part


function str_con_cat(str1,str2){
    if(str1.length>str2.length){
        str1 = str1.substring(str1.length-str2.length);
    }
    if(str1.length<str2.length){
        str2 = str2.substring(str2.length-str1.length);
    }

    return str1+str2;

}

console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ab", "cdef"));

