// Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

function change_characters(str){
    
    var result =[];
    for(let i=0;i<str.length;i++){
       
            var char= str.charCodeAt(i) - 'a'.charCodeAt(0); // getting the difference between the given char and a ==we have taken 'a' as referecne point
            var change_char = 25 - char + 'a'.charCodeAt(0);
            result.push(String.fromCharCode(change_char));
            
        
    }
    return result.join('');
}

console.log(change_characters("abcxyz"));
console.log(change_characters("python"));  

