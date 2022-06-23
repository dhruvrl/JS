// Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

function check(num1, num2){
    if(num1>=40 && num1<=60&&num2>=40 && num2<=60 ||num1>=70 && num1<=100&& num2>=70 && num2<=100  ){
        return true;
    }
    else{
        return false;
    }
}

console.log(check(44, 56));
console.log(check(70, 95));
console.log(check(50, 89));