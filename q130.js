// Write a JavaScript program to find the number of even digits in a given integer.
function even_number(num){
    count = 0;
    while(num>0){
        temp = num%10;
        if(temp%2===0){
            count++;
        }
        num = Math.floor(num / 10);
    }
    return count;
}
console.log(even_number(1234));

console.log(even_number(123));
console.log(even_number(1020));
console.log(even_number(102));