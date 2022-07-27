//  Write a JavaScript program to get the largest even number from an array of integers.

function largest_even_number(num){
    final=0;
    for(let i=0;i<num.length;i++){
        max = num[i]
        if(max%2==0 && max>=num[i] ){
            final = max;
        }
    }
    return final;
}

console.log(largest_even_number([20, 40, 200]));
console.log(largest_even_number([20, 40, 200, 301]));