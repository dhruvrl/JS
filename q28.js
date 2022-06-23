// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

function check(num1, num2){
    if(num1>=50 && num1<=99||num2>=50 && num2<=99 ){
        return true;
    }
    else{
        return false;
    }
}

console.log(check(65,0));

console.log(check(76,87));

console.log(check(99,99));

console.log(check(0,199));