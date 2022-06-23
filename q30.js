// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one. 

function check(str){
    if(str.substring(4,10)=="Script"){
        return str.substring(0,4)+str.substring(10,str.length);
    }
    else{
        return str;
    }
}



console.log(check("JavaScript1"));

console.log(check("JavaScript"));
console.log(check("CoffeeScript"));