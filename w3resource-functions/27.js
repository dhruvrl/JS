// longest palindrome from string 
function isPalindrome(str){
    let i=0
    let j = str.length-1
    while(i<j){
        if(str.charAt(i)!=str.charAt(j)){
            return false;
        }
        i++;
        j--;
    }
    return true;
}
function longest_palindrome(str){

    let stri = str.split(' ')
    let array = []
    let max = ""
    for(let i =0;i<stri.length;i++){
        //console.log(str[i])
        if(isPalindrome(stri[i])){
            array.push(stri[i]);
            if(max.length<stri[i].length){
            max = stri[i]
            }
        }
    }
    console.log(array)
    return max
}
console.log(longest_palindrome('is a goog triaumphg saippuakivikauppias is a dod racecar'))
