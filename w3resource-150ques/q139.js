//  Write a JavaScript program to find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number.

function roundmost_number (number){
    var result =0;
    for(var i=0;i<number.length;i++){
        if(number[i]%10==0){
            result= i;
        }
       
    }
    return result;
}
console.log(roundmost_number([1, 22, 30, 54, 56]));
console.log(roundmost_number([1, 22, 32, 54, 56]));
console.log(roundmost_number([1, 22, 32, 54, 50]));