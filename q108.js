//  Write a JavaScript program to create the dot products of two given 3D vectors.

function dot_product(vector1, vector2)
{
    var result=0;
    for(let i=0;i<vector1.length;i++){
        result+=vector1[i]*vector2[i];
    }
    return result;
}

console.log(dot_product([1,2,3], [1,2,3]))
console.log(dot_product([2,4,6], [2,4,6]))
console.log(dot_product([1,1,1], [0,1,-1]))