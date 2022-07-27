// Write a JavaScript program to reverse the elements of a given array of integers length 3. 

function reverse_array(array){
    j=1;
    
    var temp = array[0];
    array[0] = array[array.length-j];
        array[array.length-j] = temp;
        
    
    return array;
}

console.log(reverse_array([5, 4, 3])); 
console.log(reverse_array([1, 0, -1]));  
console.log(reverse_array([2, 3, 1]));