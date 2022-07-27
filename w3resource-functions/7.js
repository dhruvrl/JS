// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
// 

function count_vowels(str){
    count =0;
    var vowelsList = 'aeiouAEIOU'
    for(var i=0;i<str.length;i++){
        if(vowelsList.indexOf(str[i])!==-1){
            count++;
        }
    }
    return count;
}

console.log(count_vowels("Queeen"));