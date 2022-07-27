//  Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
//Accept b and n from the user and display the result.
// //one method 
// function exponent(b, n){ // b is the base and n is the exponent

//             return Math.pow(b,n);
// }
// console.log(exponent(2,3));
//another method 

function exponent(b, n){ // b is the base and n is the exponent
    res = 1;
    for(var i=0;i<n;i++){
        res = res * b;
    }
    return res;
}
console.log(exponent(2,3));
