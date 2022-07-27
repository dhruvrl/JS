// Write a JavaScript program to find the smallest prime number strictly greater than a given number.

function smallest_prime_no(num){
    for(let i=num+1;;i++)
    {
        var isPrime = true;
        for(var temp = 2; temp<=Math.sqrt(i);temp++){
            if(i%temp === 0){
                isPrime = false;
                break;
            }

        }
        if(isPrime){
            return i;
        }
    }
}

console.log(smallest_prime_no(3));
console.log(smallest_prime_no(17));
console.log(smallest_prime_no(101));