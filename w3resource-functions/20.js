//  Write a JavaScript function that generates a string id (specified length) of random characters. Go to the editor
//Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"


function makeList(length)
{
    charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" 
    var text = ""
    for(var i=0;i<length;i++){

        text = text + charList.charAt(Math.floor(Math.random()*charList.length));
    }
    return text

}

console.log(makeList(5))