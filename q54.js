//  Write a JavaScript program to count the number of vowels in a given string.

function count(s){
    s = s.split('');
    count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'){
            count+=1;
        }

    }
    return count;
}

console.log(count("w3resource.com"));
