// Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.
function divide_integer(a,b){

    if(b==1){
        return a;
    }
    else{
        while(a%b==0)
        a/=b;
    }
    return a;
}
console.log(divide_integer(-12, 2))
console.log(divide_integer(13, 2))
console.log(divide_integer(13, 1))