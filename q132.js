// Write a JavaScript program to find all distinct prime factors of a given integer.

function distinct_prime_factors(num){
    function isPrime(num){
        for(let i=2;i<=Math.sqrt(num);i++){
                if(num%i===0){
                    return false;
                }
        }
        return true;
    }
    const result =[];
    for(let i=2;i<=num;i++){
        while( isPrime(i) && num%i===0 ){  // we are checkin here 2 things one is the factor by which we are dividing the number is prime or not 
        //prime fucntion and other thing is if it is prime then it is dividing the number completely.
            if(!result.includes(i)) {result.push(i);}
            num/=i;
        }
    }
    return result;
}
console.log(distinct_prime_factors(7));
console.log(distinct_prime_factors(100));
console.log(distinct_prime_factors(101));
console.log(distinct_prime_factors(103));
console.log(distinct_prime_factors(104));
console.log(distinct_prime_factors(105));