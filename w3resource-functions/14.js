// Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

function amountTocoins(amount, coins){ 
    if(amount <= 0){
        return []; 
    }
    var result = [];
    i=0;
    while(amount>0){
        if(amount>=coins[i]){
            result.push(coins[i])
            amount = amount - coins[i];
        }
        else{
            //coins.shift();
            i++;
        }
    }
    return result;
}

console.log(amountTocoins(46,[25,10,5,2,1]));