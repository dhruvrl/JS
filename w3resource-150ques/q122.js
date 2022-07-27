// Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence.


function check_order_of_array(array){
    if(array.length==1)
    {
        return true;
    }
    var array_direction= array[1]-array[0];
    for(var i=0;i<array.length;i++)
    {
        if(array_direction*(array[i+1]-array[i])<=0){
            return false;
        }
    }
    return true;
}

console.log(check_order_of_array([1,2,3,4,5]));
console.log(check_order_of_array([1,2,2]));
console.log(check_order_of_array([-3,-2,-1]));

