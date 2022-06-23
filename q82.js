// Add two positive integers without carry

function add_two_int_without_carrying(n1, n2){
    sum = 0;
    x=1;
    while(n1>0 && n2>0){
        sum = sum + x*((n1+n2)%10);    // here x is used to mark the place and when we add n1 & n2 we get the last digit by %
        n1 = Math.floor(n1/10);
        n2 = Math.floor(n2/10);
        x = x * 10;

    }
    return sum;
}

console.log(add_two_int_without_carrying(222, 911))
console.log(add_two_int_without_carrying(200, 900))