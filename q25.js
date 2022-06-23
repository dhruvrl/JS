// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

function check(num){
    if(num %3== 0){
        if(num%7==0){
            console.log("Multiple of both ");
            return;
        }
        console.log("Multiple of 3 ");
    }
    else if(num %7 ==0 ){
        console.log("Multiple of 7 ");
    }
    // else if(num%3==0 && num){

    // } 
    else{
        console.log("Try again");
    }
}


check(49);
check(36);
check(21);
check(12);
check(20);