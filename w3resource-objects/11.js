// Write a JavaScript function to print all the methods in an JavaScript object.

function FindAllMethods(obj){
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
} 
console.log(FindAllMethods(Math));
console.log(FindAllMethods(Array));

//
console.log("*-------------------------------------------------*");
//


// Write a JavaScript function to print all the methods and properties in an JavaScript object.

function all_properties(obj) 
{
 return Object.getOwnPropertyNames(obj);
}

console.log(all_properties(Math));

console.log(all_properties(Array));