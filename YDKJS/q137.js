//Write a JavaScript program to test whether a given integer is greater than 15 return the given number, otherwise return 15.

function greater_than_15(number){
    if(number > 15 ){
        return number;
    }
    return 15;

}

console.log(greater_than_15(35));
console.log(greater_than_15(5));
console.log(greater_than_15(15));
