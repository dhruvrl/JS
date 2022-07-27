//  Write a JavaScript program to find the longest string from a given array.

function longest_string(array){
    var max_str = array[0].length;
    var ans = array[0];
    for(let i=1;i<array.length;i++){
        var max_i  = array[i].length;
        if(max_i>max_str){
            ans = array[i];
            max_str = max_i;
        }
    }
    return ans;
}
console.log(longest_string(["ab", "a", "abcd"]));
console.log(longest_string(["ab", "ab", "ab"]));