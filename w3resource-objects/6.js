// Write a Bubble Sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

class Bubble_Sort{

    constructor(array){
        this.array = array;
    }
    get_sorted(){
        var  is_sorted = false;
        while(!is_sorted){    // this loop is to trsverse the array completely till end to make sure every element is sorted 
            is_sorted = true;
            for( var n=0; n<this.array.length; n++){   // this loop is working to swap the elements  n & n+1
                if(this.array[n] > this.array[n+1]){
                    var temp = this.array[n+1];
                    this.array[n+1] = this.array[n];
                    this.array[n] = temp;
                    is_sorted = false;
                }
            }
        }
        return this.array;
    }
}
 
var arra = new Bubble_Sort([6,4,0, 3,-2,1])
console.log(arra.get_sorted());
