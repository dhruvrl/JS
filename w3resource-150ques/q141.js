// Write a JavaScript program to find the number of elements which presents in both of the given arrays.

function count_same_elements(array1, array2){
    var count = 0;
    for(var i=0;i<array1.length;i++){
        for(var j=0;j<array2.length;j++){
            if(array1[i]===array2[j]){
                count++;
            }
        }
    }
    return count;
}

console.log(count_same_elements([1,2,3,4], [1,2,3,4]));
console.log(count_same_elements([1,2,3,4], [1,2,3,5]));
console.log(count_same_elements([1,2,3,4], [11,22,33,44]));