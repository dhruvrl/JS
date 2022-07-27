// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.  

function contains_1_3(array){
    for(let i=0;i<array.length;i++){
        if(array[i]==1 || array[i]==3){
            return true;
        }
    }
    return false;
}

console.log(contains_1_3([1, 5]));  
console.log(contains_1_3([2, 3]));  
console.log(contains_1_3([7, 5])); 