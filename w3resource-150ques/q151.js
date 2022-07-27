// Write a JavaScript program to convert the number into binary.

function reverse_bits(num){
    
        var binaryValues =[]
        var counter = 0;
        while(num>0){
            binaryValues[counter++] = parseInt(num % 2);
            num= parseInt(num/2);
        }
        for (var j = counter - 1; j >= 0; j--){
        binaryValues[j];}


        return binaryValues.join('');
}

console.log(reverse_bits(5));