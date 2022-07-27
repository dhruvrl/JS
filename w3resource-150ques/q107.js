// Write a JavaScript program to find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one.

function sorted_pairs(array){
    count=0;
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i] % array[j]==0|| array[j]%array[i]==0){
                count++;
            }
        }
    }
    return count;
}

console.log(sorted_pairs([1,2,3]))
console.log(sorted_pairs([2,4,6]))
console.log(sorted_pairs([2,4,16]))
