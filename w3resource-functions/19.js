// Write a JavaScript function that returns array elements larger than a number.

let isBigEnough=(array, num) =>{
    let newarray = []
    
    for(var i=0;i<array.length;i++){
        if(array[i]>num){
            newarray.push(array[i])
        }
    }
    return newarray
}

console.log(isBigEnough([11,45,4,41,10],4))