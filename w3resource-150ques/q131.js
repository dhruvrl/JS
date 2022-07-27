// Write a JavaScript program to create an array of prefix sums of the given array.

function prefix(array1){
  newArray = [];
  for(let i=0;i<array1.length;i++){
    newArray[i]=0;
    for(let j=0;j<i+1;j++){
        newArray[i]+=array1[j];
    }
  }
  return newArray;
}

console.log(prefix([1, 2, 3, 4, 5]));
