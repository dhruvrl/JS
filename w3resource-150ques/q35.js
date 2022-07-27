// Write a program to check whether a specified character exists within the 2nd to 4th position in a given string

function check(str,target){
    flag = 0;
    for(let i=0;i<str.length;i++){
        if((str.charAt(i))==target && i>=1 && i<=3){
            flag = 1;
            break;
        }

    }
    if (flag==1) return true;
    return false; 
}

console.log(check("Python", "y"));
console.log(check("JavaScript", "a"));
console.log(check("Console", "o"));
console.log(check("Console", "C"));
console.log(check("Console", "e"));
console.log(check("JavaScript", "S"));