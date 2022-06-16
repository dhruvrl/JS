// Write a JavaScript program to swap two halves of a given array of integers of even length. 

function halves(num){
    if(num.length%2==0){
        for(let i=0;i<num.length/2;i++){
        var temp = num[i];
        num[i]=num[i+(num.length/2)];
        num[i+(num.length/2)] = temp;

    }
    return num;}
    else{
        return false;
    }
}

console.log(halves([1,2,3,4,5,6]))
console.log(halves([1,2,3,4,5,6,7]))