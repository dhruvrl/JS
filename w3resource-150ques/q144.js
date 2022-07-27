// Write a JavaScript program to break an address of an url and put it's part into an array.  Go to the editor
// Note: url structure : ://.org[/] and there may be no part in the address.

//  "https://www.w3resource.com/javascript-exercises/"

//solution should be in th format of ["https","www.w3resource","javascript-exercises"]

function url_break(url){

    url = url.split("://");
    var scheme = url[0];
    url = url[1].split("/");
    var doamin = url[0];
    var subdirectory = url[1];
    domain= doamin.split(".com");
    return [scheme, domain, url]
    

}

var url = "https://www.w3resource.com/javascript-exercises/"
console.log(`Original address: ${url}`)
console.log(url_break(url))