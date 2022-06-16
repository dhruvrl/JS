// Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.

function max(num){
    sum=0;
    i=0;
    while(sum<=num){
       sum=sum+i;
       i=i+1; 
    }
    return i-2;
}

console.log(max(11))
console.log(max(15))