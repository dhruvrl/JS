//  Write a JavaScript program to reverse the order of the bits in a given integer. 

function reverse_order_bits(num){
    function binary(num){
        binaryValue= [];
        counter =0;
        while(num>0){
            binaryValue[counter++] = parseInt(num % 2);
            num= parseInt(num/2);
        }
        for(let j=counter-1;j>=0;j--){
            binaryValue[j];
        }
        return binaryValue;

    }
    t =binary(num);
   for(let i=0;i<8-t.length;i++){
    t.unshift("0");
   }
   return parseInt(t.join(""), 2);
}
console.log(reverse_order_bits(5))
// 14 -> 00001110 -> 01110000 -> 112
console.log(reverse_order_bits(14));
// 56 -> 00111000 -> 00011100 -> 28
console.log(reverse_order_bits(56));
// 234 -> 11101010 -> 01010111 -> 87
console.log(reverse_order_bits(234));

// tricky ques will see this again