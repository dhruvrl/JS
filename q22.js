// Write a JavaScript program to remove a character at the specified position of a given string and return the new string. 

function remove (str, char_pos){
     part1 = str.substring(0,char_pos);
     part2 = str.substring(char_pos+1, str.length);
     return (part1 + part2);
}

console.log(remove("Random",2));
console.log(remove("Random",0));
console.log(remove("Random",5));