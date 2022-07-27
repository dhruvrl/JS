// Write a JavaScript program to find two elements of the array such that their 
// absolute difference is not greater than a given integer but is as close to the said integer.

function check_absolute_difference(array,num){
    max_val = -1;
    for(let i=0;i<array.length;i++){
        for(j=i+1;j<array.length;j++)
        {
            var x= Math.abs(array[i]-array[j]);
            if(x<=num){
                max_val = Math.max(max_val, x);
            }
        }
    }
    return max_val;
}

console.log(check_absolute_difference([12, 10, 33, 34], 10));
console.log(check_absolute_difference([12, 10, 33, 34], 24));
console.log(check_absolute_difference([12, 10, 33, 44], 40));
