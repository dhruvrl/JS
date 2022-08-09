// Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.

function subset(arr) {
    let sub = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            sub.push([arr[j], arr[i]]);
        }
    }
    return sub;
}

console.log(subset([1, 2, 3]));

//nice algorithm simple: time complexity is O(n^2)


