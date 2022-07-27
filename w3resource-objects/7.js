// Write a JavaScript program which returns a subset of a string. 
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

class str_subset{
    constructor(str){
        this.str = str;
        
    }
    
    get_subset(){
        var sub =[];
        for(var i=0;i<this.str.length;i++){
            for (var j=i+1;j<this.str.length+1;j++){
                sub.push(this.str.slice(i,j));
            }
        }
        return sub; 
    }
}

var sub_set = new str_subset("DOG");
console.log(sub_set.get_subset());