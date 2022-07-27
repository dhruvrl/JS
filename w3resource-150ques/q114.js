// Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.)

function correct_string(str){
    str = str.split("");
    
    if(str[0]>="A"&& str[0]<="Z"&&str[str.length-1]=='.'){
        return true;
    }
    return false;
}

console.log(correct_string("This tool will help you write better English and efficiently corrects texts."));
console.log(correct_string("This tool will help you write better English and efficiently corrects texts"));            
console.log(correct_string("this tool will help you write better English and efficiently corrects texts."));