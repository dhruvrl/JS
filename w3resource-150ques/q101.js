// Write a JavaScript program to check whether a given string contains
// only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.

function check_string(str){
    var is_lower_case = function(value){
        if(value>= 'a' && value<='z'){
            return true;
       }
       return false;
    }
    
    var is_upper_case = function(value){
        if(value>= 'A' && value<='Z'){
            return true;
       }
       return false;
    }

    var is_first_char_lower = is_lower_case(str[0]),
        is_first_char_upper = is_upper_case(str[0]);

    if(!(is_first_char_lower) || is_first_char_upper){
        return false;
    }

    for(var i=1; i<str.length;i++){
        if(i%2){
            if(is_lower_case(str[i]) === is_first_char_lower || is_upper_case(str[i])== is_first_char_upper){
                return false;
            }}
            else{
                if(is_lower_case(str[i])!= is_first_char_lower || is_upper_case(str[i])!= is_first_char_upper){
                    return false;
                }
            }
         
    }
    return true;

}
console.log(check_string('xYr'));   
console.log(check_string('XXyx')); 