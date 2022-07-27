// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function prime(num){
    for(var i=2;i*i<=num; i++){
        if(num%i==0){
            return "Not Prime"
            
        }
    }
    return "prime";
}

console.log(prime(4));    