// Write a JavaScript function which returns the n rows by n columns identity matrix. 

function identity(n){

    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            if(i==j){
                console.log('1');
            }
            else{
                console.log('0');
            }
        }
        console.log('----------------');
    }
}

identity(3);