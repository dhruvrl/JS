// Write a JavaScript program to check whether a given number is in a given range.

function given_number_range( lower,num, upper){

    if(num>=lower && num<=upper){
        return true;
    }
    return false;
}


console.log(given_number_range(1,2,3));
console.log(given_number_range(1,2,-3));
console.log(given_number_range(1.1,1.2,1.3));