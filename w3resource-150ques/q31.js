//  Write a JavaScript program to find the largest of three given integers.

function check(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
}

console.log(check(3,5,7)+" is largest");
console.log(check(1,0,1)+" is largest");
console.log(check(0,-10,-20)+" is largest");
console.log(check(1000,510,440)+" is largest");