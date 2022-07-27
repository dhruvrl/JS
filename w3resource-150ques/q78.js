// Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3. 


function not_contains_1_3(array){
    for(let i=0;i<array.length;i++){
        if(array[i]==1 || array[i]==3){
            return false;
            
        }
    }
    return true;
}
console.log(not_contains_1_3([7, 9]));
console.log(not_contains_1_3([3, 2]));
console.log(not_contains_1_3([0, 1])); 
