// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

function check_spaces_between_a_b(str){
    str = str.split("");
    countOfA=[];
    countOfB=[];
    j=0;// for traversing countOfA array
    k=0;// for traversing countOfB array
    for(let i=0;i<str.length;i++)
        {
           
        if(str[i]=='a'){
            countOfA[j] = i;
            
            j+=1;
        }
        if(str[i]=='b'){
            countOfB[k] = i;
            
            k+=1;
        }
        
        
    }
    console.log(countOfA);
    console.log(countOfB);
    for(let j=0;j<countOfA.length;j++){
     if(countOfB[j]-countOfA[j]-1==3){
        return true;
    }
    return false;
}}

console.log(check_spaces_between_a_b("Chainsbreak"));
console.log(check_spaces_between_a_b("pane borrowed"));
console.log(check_spaces_between_a_b("abCheck"));
console.log(check_spaces_between_a_b("axyzbdefavfb"));
console.log(check_spaces_between_a_b("axyzbdefavfbskdgfb"));