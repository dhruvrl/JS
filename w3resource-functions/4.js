//Write a JavaScript function that returns a passed string with letters in alphabetical order. 
//Example string : 'webmaster'
//Expected Output : 'abeemrstw'

// one method 

// function alphabetical(str){

//     str = str.split("").sort().join('');
//     return str;

// }

// console.log(alphabetical("webmaster"));

//second method 

function alphabetical(str){

    str = str.split("");
    count = 0, i=1;
    while(count<str.length){
        if(str[i]>str[i-1]){
            temp = str[i]
            str[i] = str[i-1]
            str[i-1] = temp
            i++;
        }
        count++;
    }

    return str.join('');

}

console.log(alphabetical("webmaster"));