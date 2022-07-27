// Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223

// One - way

// function reverse(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverse("32243"));


//Another way 

function reverse(str){
    res = 0;
    while(str!=0){
        num = str%10;
        res = res*10+num;
        str = Math.floor(str/10);

    }

    return res;
}
console.log(reverse(2243));

