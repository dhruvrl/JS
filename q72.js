// Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3. 

function first_last_same(array){
    if(array[0]==array[array.length-1]){
        return true;
    }
    else{
        return false;
    }
}

console.log(first_last_same([10, 20, 30])); 
console.log(first_last_same([10, 20, 30, 10])); 
console.log(first_last_same([20, 20, 20])); 