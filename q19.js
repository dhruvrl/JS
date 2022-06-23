//  Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  

// given integer is within 20 of 100 or 400.    This means inter is less than or equal to 2 0 after subtracting it form 100 or 400

function diff(num){


    return((100-num<=20) || (400-num<=20));

}

console.log(diff(10));
console.log(diff(90));
console.log(diff(99));
console.log(diff(199));
console.log(diff(200));