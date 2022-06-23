// Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.

function array_element_replace(array, old_value, new_value){

    for(let i=0;i<array.length;i++){
        if(array[i]==old_value){
            array[i]=new_value;
        }
    }
    return array;

}

num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log("Original Array: "+num);
console.log(array_element_replace(num, 2, 5));