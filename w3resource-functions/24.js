//  Write a JavaScript function to apply Bubble Sort algorithm

function bubble_Sort(array){
    
    for(var i=0;i<array.length;i++){
        for(j=i+1;j<array.length;j++){
            if(array[i]<array[j]){
                temp = array[i];
                array[i]=array[j]
                array[j] = temp
            }
        }
    }
    return array
    
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

console.log(bubble_Sort([4,5,6]));