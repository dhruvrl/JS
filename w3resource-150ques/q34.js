// Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive...

function check(num1, num2){
    if(num1 >=40 && num1<=60 && num2>=40 &&num2<=60){
        if(num1>num2){
            console.log(`${num1} is greater than num2`);
        }
        else{
           console.log(`${num2} is greater than num1`);


        }
        
    }
    else{
        console.log("number dont fit")
    }
}

check(25,60);
check(45,60);
check(45,80);