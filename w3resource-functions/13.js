// Write a JavaScript function to compute the factors of a positive integer.

function factors(num){
    array = [];
    j=0;
    for(var i=1;i<=num/2;i++){
        if(num%i==0){
            array.push(i);
            if(num/i==num){
                array.push(num/i);;
            }
        }
       
    }
    array.sort(function(x,y){
        return x-y;
    });
    return array;
}

console.log(factors(15));
console.log(factors(15));  // [1,3,5,15] 
console.log(factors(16));  // [1,2,4,8,16] 
console.log(factors(17));  // [1,17]