// Write a function for searching JavaScript arrays with a binary search. Go to the editor
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// Click me to see the solution.

function binary_search(array, element){
    var midposition = Math.floor(array.length /2 );
    if(array[midposition]==element){
        return midposition;
    }
    else if(array.length==1){
        return null;
    }

    else if(array[midposition]<element){
        var arr = array.slice(midposition+1);
        var res = binary_search(arr, element);
        if(res == null){
            return null;
        }
        else{
            return midposition + 1 + res;
        }
    }
    else{

    }
    var arr1 = array.slice(0,midposition+1);
    return binary_search(arr1, element);
}

var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(binary_search(myArray, 6));
