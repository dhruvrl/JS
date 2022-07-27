// Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers

function check_absolute_difference(array){
    let sum=0;
    for(let i=1;i<array.length;i++){
    sum = sum+Math.abs(array[i]-array[i-1]);
    }
    return sum;
}
console.log(check_absolute_difference([1, 2, 3, 2, -5]));
