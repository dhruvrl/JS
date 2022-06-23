// Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.

function trailing_zeros_factorial(num){
    count =0;
    fact=1;
    while(num>0){
        
        fact =  fact*num;
        num--;
    }

    while (fact % 5 === 0) {
        fact /= 5;
        count++;}
        return count;
}

console.log(trailing_zeros_factorial(8))
console.log(trailing_zeros_factorial(9))
console.log(trailing_zeros_factorial(10))