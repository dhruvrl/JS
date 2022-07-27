// Write a JavaScript function that checks whether a passed string is palindrome or not? 
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
// //one method
// function palindrome(str){
//     str = str.replace(" ","");
//     rev = "";
//     rev =  str.split("").reverse().join("");
//     if(rev === str){
//         return "It's a palindrome";
//     }
//     else{
//         return "It's not a palindrome";
//     }
// }

// console.log(palindrome("madam"));
// console.log(palindrome("nurses run"));
// console.log(palindrome("fox"));

//another method

function check_Palindrome(str){
    // if length of string is less than 0 then enter string again
    if(str.length<=0){
        return "Invalid string";
    }

    // remove all non-alphanumeric characters from string
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    if(str.length % 2 === 0){
        ccount = str.length/2;
    }
    else{
        ccount = (str.length-1)/2;
    }

    // loop to check the first character to the last character and then move next 

    for(var i = 0; i<ccount; i++){
        if(str[i] != str.slice(-1-i)[0]){
            console.log("It's not a palindrome")
            return false;
        }
    }
    console.log("The entry is a palindrome.");
	return true;
}
check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('fox');