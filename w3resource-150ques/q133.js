//  Write a JavaScript program to check whether a given fraction is proper or not. Inout - array
// Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise

function fraction(num){
    if(Math.abs(num[0]/num[1])<1){
        return 'Proper Fraction';
    }
    return 'Improper fraction';
}

console.log(fraction([12, 300]));
console.log(fraction([2, 4]));
console.log(fraction([103, 3]));
console.log(fraction([104, 2]));
console.log(fraction([5, 40]));