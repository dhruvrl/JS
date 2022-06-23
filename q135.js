//  Write a JavaScript program to remove all characters from a given string that appear more than once.

function remove_duplicates(str){
    var array = str.split('');
    var result =[];
    
    for(let i=0;i<array.length;i++){
        if(str.indexOf(array[i]) === str.lastIndexOf(array[i])){
            result.push(array[i]);
        }
    }
    return result.join('');
}
console.log(remove_duplicates("abcdabc"));
console.log(remove_duplicates("python"));
console.log(remove_duplicates("abcabc"));
console.log(remove_duplicates("1365451"));