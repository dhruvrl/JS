//  Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

function find(num1, num2){
 
    if(100 - num1 < 100- num2){
        return num1;
    }
    else if(100 - num1 == 100- num2 ){
        
        return false;
    }
    else{
        return num2;
    }
}

console.log(find(35,36)+ " is nearest");
console.log(find(90, 89));
console.log(find(-90, -89));
console.log(find(90, 90));