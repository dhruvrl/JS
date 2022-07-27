//  Write a JavaScript program to find whether the members of a given array of integers is a permutation of numbers from 1 to a given integer.

function permutation(array, num){
    for(let i=0;i<num;i++){
        if(array.indexOf(i+1)<0){
            console.log(array.indexOf(i+1));
            return false;
        }
    }
    return true;
}

console.log(permutation([1, 2, 3, 4, 5], 5));
console.log(permutation([1, 2, 3, 4], 5));