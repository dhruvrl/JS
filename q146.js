// Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.

function calculate(num){
    if(num<0){
        return false;
    }
    sum=0;
    for(let i=1;i<=num;i++){
        sum=sum+i*i*i;


    }
    return sum;
}

console.log(calculate(9));
console.log(calculate(3));
console.log(calculate(4));
