// Write a JavaScript to find the longest string from a given array of strings.

function longest_string_in_array_of_strings(array){
    var len = array[0].length;
    result = array[0];
    for(let i=0;i<array.length;i++){
        if(array[i].length>len){
            len = array[i].length;
            result = array[i];
        }
    }
    return result;
}


console.log(longest_string_in_array_of_strings(['a', 'aa', 'aaa','aaaaa','aaaa']))