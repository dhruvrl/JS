// Write a JavaScript program to change the capitalization of all letters in a given string.

function cap(str){
    str = str.split('');
    for(let i=0;i<str.length;i++){
        if(str[i]>='A' && str[i]<='Z'){
           //console.log("hello");

            str[i]=str[i].toLowerCase();
        }
        else{
            str[i]=str[i].toUpperCase();
        }
    }
    return str.join("");
}
console.log(cap("ApyhTHON"));

console.log(cap("w3resource"));
console.log(cap("Germany"));
