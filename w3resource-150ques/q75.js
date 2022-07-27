//Create a new array taking the middle elements of the two arrays of integer and each length 3


function middle_elements(array1,array2){
    if(array1.length%2!=0 && array2.length%2!=0){
        a1 = array1[Math.floor(array1.length/2)];
        a2 = array2[Math.floor(array2.length/2)];
    }
    else{
        a1 = array1[Math.floor((array1.length+1)/2)];
        a2 = array2[Math.floor((array2.length+1)/2)];
        
    }

    return [a1, a2];
}
console.log(middle_elements([1, 2, 3], [1, 5, 6]));  
console.log(middle_elements([3, 3, 3], [2, 8, 0]));  
console.log(middle_elements([4, 2, 7], [2, 4, 5])); 
console.log(middle_elements([4, 2, 7,7], [2, 4, 5,3])); 