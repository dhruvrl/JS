// Write a JavaScript program to reverse a given string

function reverse(str){
    return str.split("").reverse().join("");
}
console.log(reverse("w3resource"));
console.log(reverse("www"));
console.log(reverse("JavaScript"));