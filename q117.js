// Write a JavaScript program to check whether a given matrix is an identity matrix.
function check_matrix_is_identity(array){
    for(let i=0;i<array.length;i++){
        rows = array.length;
        cols = array[i].length;
        if(rows!=cols){
            console.log( " not same size ");
            return false;
            
        }
    }
    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<array.length;j++){
            if (array[i][j] !== 1 && i === j || array[i][j]==1 && i !== j){
                return false;
            }
        }
    }
    return true;
}

console.log(check_matrix_is_identity([[1, 0, 0, 2], [0, 1, 0], [0, 0, 1]]));
console.log(check_matrix_is_identity([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]))
console.log(check_matrix_is_identity([[1, 0, 1],  [0, 1, 0],  [0, 0, 1]])) 


