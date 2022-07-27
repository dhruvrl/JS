// Write a JavaScript program to check whether a given integer has an increasing digits sequence.
function check_increasing_sequence(num){
    flag = 0;
    var temp = num%10;
    num = num/10;

    while(num>0){
        
        if(temp>num%10){
            temp = num%10;
           num= num/10;
        }
        else{
            return false;
        }
    }
    return true;

}
console.log(check_increasing_sequence(123));
console.log(check_increasing_sequence(1223));
console.log(check_increasing_sequence(45677)); //will check thsi later giving wring results