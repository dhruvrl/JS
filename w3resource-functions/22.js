//Write a JavaScript function that accepts two arguments,
// a string and a letter and the function will count the number of occurrences of the specified letter within the string.

function count(str, char){
    let count1=0
    for(i=0;i<str.length;i++){
        if(str[i]==char){
            count1+=1;
        }
    }
    return count1;
}

console.log(count('w3resource.com','o'))

