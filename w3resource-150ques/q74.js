// Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array

function all_max(array){
    max= Math.max(array[0], array[array.length-1]);
    temp=[];
    for(let i=0;i<array.length;i++){
        temp[i]=max;
    }
    return temp;
}
console.log(all_max([20, 30, 40]));
console.log(all_max([-7, -9, 0]));
console.log(all_max([12, 10, 3]));