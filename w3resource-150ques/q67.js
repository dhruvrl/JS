// Write a JavaScript program to create a new string from a given string,
// removing the first and last characters of the string if the first or last character are 'P'. 
// Return the original string if the condition is not satisfied. 

function newString(str){
    last = str.substring(str.length-1, str.length);
    first = str.substring(0,1);
    if(last == 'P'&& first=='P'){
        return str.substring(1,str.length-1);
    }
    else{
        return str;
    }
}
console.log(newString("PythonP"));
console.log(newString("Python"));
console.log(newString("JavaScript"));