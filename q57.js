// Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

function string_copies(str,num){
    temp='';
    if(num<0){
        return false;
    }
    if(num==0){
        return str;
    }
    while(num>0){
        temp+=str;
        num--;
    }
    return temp;
}

console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
console.log(string_copies("abc", -2));