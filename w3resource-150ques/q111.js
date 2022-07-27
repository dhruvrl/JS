// Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one.

function find_third_number(x,y,z){
    if( x!=y && y!=z&& x!=z){
        return "All numbers are unequal";
    }

    if(x==y){
        return z;
    }

    if(x==z){
        return y;
    }

    if(z==y){
        return x;
    }
}

console.log(find_third_number(1,2,2))
console.log(find_third_number(1,1,2))
console.log(find_third_number(1,2,3))

// code for if numbers are equal or not 
// function check_numbers_equal(num){
//     count =0;
//     for(let i=0;i<num.length;i++){
//         if(num[i]==num[i+1]){
//             count++;
//         }
//     }
//     if(count ==0){
//         return "three numbers are unequal;"
//     }

//     return count;
// }
// console.log(check_numbers_equal([1,2,2]))
// console.log(check_numbers_equal([1,1,2]))
// console.log(check_numbers_equal([1,2,3]))