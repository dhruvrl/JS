// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.

function check(num1, num2, num3){
    if(num1>=50 && num1<=99||num2>=50 && num2<=99||num3>=50 && num3<=99 ){
        return true;
    }
    else{
        return false;
    }
}

console.log(check(65,0,0));

console.log(check(76,87,54));

console.log(check(99,99,1));

console.log(check(0,199,121));

console.log(check(50, 90, 99));
console.log(check(5, 9, 199));
console.log(check(65, 89, 199));
console.log(check(65, 9, 199));