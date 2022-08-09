// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"


function country_names(array){
    max = array[0]
    for (var i=0;i<array.length;i++){
        if(array[i]>max){
            max = array[i]
        }
    }
    return max
}

console.log(country_names(["Australia", "Germany", "United States of America"]));