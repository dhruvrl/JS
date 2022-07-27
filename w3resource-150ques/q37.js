// Write a JavaScript program to create new string with first 3 characters are in lower case from a
// given string. If the string length is less than 3 convert all the characters in upper case

function convert(str){

    if(str.length<3){
        return str.toUpperCase();
    }
    else{
        first3 = str.substring(0,3).toLowerCase();
        main = str.substring(3,str.length);
        return first3+main;
    }

}
console.log(convert("Python"));
console.log(convert("Py"));
console.log(convert("JAVAScript"));