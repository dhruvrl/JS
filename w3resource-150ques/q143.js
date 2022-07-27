// JavaScript: Sort the strings of a given array of strings in the order of increasing lengths

function compare(str){
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            if(str[i].length>str[j].length){
                var temp = str[i];
                str[i]=str[j];
                str[j]=temp;
            }
        }
    }
    return str;
}

var str = ["xyz","acd","aa","bb","zzz","", "a","b"];
console.log("Original array: "+ str+"\n");
console.log(compare(["xyz","acd","aa","bb","zzz","", "a","b"]));