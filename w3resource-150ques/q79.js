// Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2. 
function check_30_40_twice(array){
    if(array.length<1){
        return false;
    }
    if(array[0]===30 && array[1]===30 ||array[0]===40 && array[1]===40  ){
        return true;
    }
    else
    {
        return false;
    }
}
console.log(check_30_40_twice([30, 30]));
console.log(check_30_40_twice([40, 40]));
console.log(check_30_40_twice([20, 20]));
console.log(check_30_40_twice([30]));

// // another way
// function twice3040(arra1) {
//     let a = arra1[0],
//         b = arra1[1];
//     return (a === 30 && b === 30) || (a === 40 && b === 40);
// }
// console.log(twice3040([30, 30]));
// console.log(twice3040([40, 40]));
// console.log(twice3040([20, 20]));
// console.log(twice3040([30]));