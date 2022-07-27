//  Write a JavaScript function which says whether a number is perfect. 
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. 
// Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. 
// The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.


function perfectNumber(num){
    var res = 0;
    for(var i=1;i<=num/2;i++){
        if(num%i==0){
            res = res+i;
        }
    }
    if( res === num   && (res+num)/2===num){
        return true;
    }
    else{return false;}
}
console.log(perfectNumber(6));
console.log(perfectNumber(28));
console.log(perfectNumber(496));
console.log(perfectNumber(8128));
console.log(perfectNumber(812));
console.log(perfectNumber(818));