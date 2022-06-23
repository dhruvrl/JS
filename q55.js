//Write a JavaScript program to check whether a given string contains equal number of p's and t's.

function compare(str){
    str=str.split('');
    p=0; 
    t=0;
    for(let i=0;i<str.length;i++){
    if(str[i]=='p'){
        p+=1;
    }
    if(str[i]=='t'){
        t+=1;
    }}
    if(t==p){
        return true;
    }
    return false;
}

console.log(compare("paatpss"));
console.log(compare("paatps"));
console.log(compare("ptpt"));