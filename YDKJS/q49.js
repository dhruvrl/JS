//  Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

function charfollow(s){
    temp=[];
    s= s.split('');
    if(s.lenght==0){
        return Invalid;
    }
    for(let i=0;i<s.length;i++){
        if(s[i]=='z'){
            temp[i]='a';
            
        }
        else if(s[i]=='Z'){
            temp[i]='A';
        }
        else{
        temp[i]= String.fromCharCode(1 + s[i].charCodeAt(0));}
        if(temp[i]=='a'||temp[i]=='e'||temp[i]=='i'||temp[i]=='o'||temp[i]=='u'){
            temp[i]= temp[i].toUpperCase();
        }
    
    }
    
    return temp.join('');
}

console.log(charfollow("zbc"));
console.log(charfollow("PYTHON"));
console.log(charfollow("W3R"));
console.log(charfollow("php"));