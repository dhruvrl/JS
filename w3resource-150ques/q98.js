// Write a JavaScript program to switch case of the minimum possible number of letters to make 
//a given string written in the upper case or in the lower case.

function change_case(str){
    lower =0;
    upper = 0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)>='A' && str.charAt(i)<='Z'){
            upper++;
        }
        else{
            lower++;
        }
    }

    if(lower>upper){
        return str.toLowerCase();
    }
    else{
        return str.toUpperCase();
    }

}

console.log(change_case("Write"))
console.log(change_case("PHp"))

