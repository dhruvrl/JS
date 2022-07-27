// Write a JavaScript program to compute the sum of all digits that occur in a given string.

function sum_v(str){
    str=str.split('');
    sum=0;
    for(let i=0;i<str.length;i++){
        if(str[i]>=0&&str[i]<=9){
            sum +=Number(str[i]);
        }
    }
    return sum;
}

console.log(sum_v("rndon23"));
console.log(sum_v("abcd12efg9"));