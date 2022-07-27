// Write a JavaScript function to extract unique characters from a string.

function unique_characters(str){

    var unique= ""; //empty string to compare

    for(var i=0;i<str.length;i++){
        if(unique.indexOf(str[i])==-1){
            unique = unique + str[i];
        }
    }
    return unique;
}

console.log(unique_characters("aaeerta"));