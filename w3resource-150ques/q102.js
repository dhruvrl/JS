// Write a JavaScript program to find the number of inversions of a given array of integers.

function number_inversions(array){
    var count=0;
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                count++;
            }
        }
    }
    return count;
}

console.log(number_inversions([0, 3, 2, 5, 9]));   
console.log(number_inversions([1, 5, 4, 3]));   
console.log(number_inversions([10, 30, 20, -10]));  