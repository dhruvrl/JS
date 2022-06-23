// Create a new string of 4 copies of the last 3 characters of a given original string

function last3copies(str){
    if(str.length<3){
        return false;
    }
    temp ='';
    str=str.substring(str.length-3,str.length);
    for(let i=0;i<4;i++){
        temp += str;
    }
    return temp;
}
console.log(last3copies("Python 3.0"));
console.log(last3copies("JS"));
console.log(last3copies("JavaScript"));