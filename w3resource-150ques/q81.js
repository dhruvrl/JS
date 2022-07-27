// Write a JavaScript program to add two digits of a given positive integer of length two. 
function count(num){
    sum=0;
    while(num>0){
        sum = sum+ num%10;
        num = Math.floor(num/10);

    }
    return sum;

}

console.log(count(32));
console.log(count(31));