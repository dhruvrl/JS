// Write a JavaScript program to check whether all the digits in a given number are the same or not.

function check_whether_digits_same(number){
    var first = number%10; // this will give the first digit
    while(number>0){
        if(number%10 !==first){
            return false;
            
        }
        number=Math.floor(number/10);


    }
    return true;
}

console.log(check_whether_digits_same(1234));
console.log(check_whether_digits_same(1111));
console.log(check_whether_digits_same(22222222));