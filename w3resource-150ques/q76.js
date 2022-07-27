// Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.

function started(array){
    if(array<1){
        return false;
    }
    first  = array[0];
    last = array[array.length-1];
    return [first , last];
}

console.log(started([20, 20, 30]));
console.log(started([5, 2, 7, 8]));
console.log(started([17, 12, 34, 78]));