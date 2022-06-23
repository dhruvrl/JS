// Write a JavaScript program to create the value of NOR of two given booleans.

function nor(a,b){
    if(a== false && b==false){
        return true;
    }
    else{
        return false;
    }
}

console.log(nor(true, false));
console.log(nor(false, false));
console.log(nor(true, true));