//  Write a JavaScript program to capitalize the first letter of each word of a given string

function capitalize(str){
    str= str.split(" ");
    for(var i=0;i<str.length;i++){
        str[i]= str[i][0].toUpperCase()+str[i].substring(1);
        }

    return str.join(" ");

}

console.log(capitalize("Write a JavaScript program to capitalize the first letter of each word of a given string."));


