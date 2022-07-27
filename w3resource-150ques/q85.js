// Write a JavaScript code to divide a given array of positive integers into two parts.
// First element goes to first part, second element goes to second part, and third element goes to first part and so on. 
//Now compute the sum of two parts and store into an array of size two.

function div_array(array){
    a = 0
    b = 0
    for(let i=0;i<array.length;i++){
        if(i%2==0){
            a+=array[i]; 
        }
        else{
            b+= array[i];
        }
    }
    return [a,b]
}
console.log(div_array([1, 3, 6, 2, 5, 10]))
