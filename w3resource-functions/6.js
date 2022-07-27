// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function longest(str){
    str = str.split(' ');
    result = str[0];
    for(var i=1;i<str.length;i++){
        if(result.length<str[i].length){
            result = str[i];
        }
    }
    return result;

}

console.log(longest("Web Development Tutorial"));