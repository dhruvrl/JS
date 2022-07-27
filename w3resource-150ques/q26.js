// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more

function newString(str){

    if(str.length<3){
        return str;
    }

    main = str.substring(str.length-3,str.length);
   
    return (main+str+main);
   
}

console.log(newString("Python"));
