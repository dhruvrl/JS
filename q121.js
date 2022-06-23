//  Write a JavaScript program to check whether a given matrix is lower triangular or not. 

function lower_triangle(array){

    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i][j]!==0){
                return false;
            }
        }
    }
    return true;
}

console.log(lower_triangle([[ 1, 0, 0, 0 ],
    [ 1, 4, 0, 0 ],
    [ 4, 6, 2, 0 ],
    [ 0, 4, 7, 6 ]]));
    

console.log(lower_triangle([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
console.log(lower_triangle([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));



// // another approach 

// function lower_triangle(array){
//     for(var i=0;i<array.length;i++){
//         for(var j=0;j<array[0].length;j++){
//             if(j>i && array[i][j]!=0)
//             {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// console.log(lower_triangle([[ 1, 0, 0, 0 ],
//     [ 1, 4, 0, 0 ],
//     [ 4, 6, 2, 0 ],
//     [ 0, 4, 7, 6 ]]));
    

// console.log(lower_triangle([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
// console.log(lower_triangle([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));