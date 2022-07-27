//Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

function check(str){
    if (str === null || str === undefined || str.substring(0,2)==="Py"){
        return str;
    }
    return "Py"+str;
}

console.log(check("PyChram"));
console.log(check("thon"));