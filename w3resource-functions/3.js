// Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function all_combinations(str){
    com = []
    for(var i=0;i<str.length;i++){
        for(var j=i+1;j<str.length+1;j++){
            com.push(str.substring(i,j));
        }
    }
    return com;
}

console.log(all_combinations("DO"));