// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
function f_and_l_swap(array){
    if(array.length<1){
        return false;
    }
    [array[0], array[array.length-1]] = [ array[array.length-1], array[0]]
    
    return array;
}

console.log(f_and_l_swap([1, 2, 3, 4]));  
console.log(f_and_l_swap([0, 2, 1]));  
console.log(f_and_l_swap([3]));
