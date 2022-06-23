// Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.

function single_digit_sum(num){
    var sum=0;
    while(num>0){
     var temp = num%10;
     sum = sum+temp;
     num=Math.floor(num/10);
    }
    var count =1;
    if(sum>9){
        max = single_digit_sum(sum);
        count++;
    }
    return count;
}

console.log(single_digit_sum(123));

console.log(single_digit_sum(156));