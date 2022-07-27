// Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length

function swap(num){
    // have to swap the number 
    num = String(num);
    if(num.length%2==0){
        num = num.split('');
        for (let i=0;i<num.length;i+=2){
            let temp = num[i];
            num[i]=num[i+1];
            num[i+1]=temp;

        }
        return num.join('');   
    }
    else{
         return false;
    }
}

console.log(swap(15));
console.log(swap(1234));
console.log(swap(123456));
console.log(swap(12345));