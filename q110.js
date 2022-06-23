//  Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

function even_value(array,num){
    var count =0;
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0 && array[i]!=num){
            count++;
        }
        if( array[i]==num){
            return count;
        }
    }
    return -1;
}

console.log(even_value([1,2,3,4,5,6,7,8], 5))
console.log(even_value([1,3,5,6,7,8], 6))