// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
// function sum_three(array){
//     sum=0;
//      for(let i=0;i<3;i++){
//         sum = sum+array[i];
//          }
//          return sum;

// }
console.log(sum_three([10, 32, 20]));  
console.log(sum_three([5, 7, 9])); 
console.log(sum_three([0, 8, -11]));

// another way
function sum_three(array){
 
    return array[0]+array[1]+array[2];

}