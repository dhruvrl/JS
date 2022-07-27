// Write a JavaScript program to replace the first digit in a string (should contains at least digit) with $ character.

function change_digit(str){

    digit =str.split('');
    for(let i=0;i<digit.length;i++){
        if(digit[i]>=0 && digit[i]<=9){
            digit[i]='$';
            break;
        }

    }
    return digit.join('');
}

console.log(change_digit("random34rrths"));
console.log(change_digit("abc1dabc"));
console.log(change_digit("p3ython"));
console.log(change_digit("ab1cabc"));   