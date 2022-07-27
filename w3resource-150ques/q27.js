//Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.  

function checkJava(str){
    if(str.substring(0,4)==="Java"){
        return true;
    }
    
    else{
        return false;
    }
}


console.log(checkJava("Javaiscool"));
console.log(checkJava("Jwavaiscool"));
console.log(checkJava("Java"));