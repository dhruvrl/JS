// Write a JavaScript program to check whether the last digit of the three given positive integers is same.

function check(num1, num2, num3){
    if( num1>0 && num2>0 && num3>0){
    a = num1%10;
    b = num2%10;
    c = num3%10;
    
    if( a==b && b==c){
        return true;
    }
    else{
        return false;
    }}
    else
    {
        return false;
    }
}

console.log(check(36,56,776));
console.log(check(20, 30, 400));
console.log(check(-20, 30, 400));
console.log(check(20, -30, 400));
console.log(check(20, 30, -400));