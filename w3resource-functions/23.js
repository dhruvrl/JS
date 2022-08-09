//  Write a JavaScript function to find the first not repeated character.


function nonrepeated(str){
    
    const size = 26;// size of frequency array as 26 alphabets are there

    let freq = new Array(size); //defining the freq array
    //initializing the array
    for(var i=0;i<size;i++){
        freq[i]=0;
    }
    
    for(var i=0;i<str.length;i++){
        freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(var i=0;i<str.length;i++){
            if(freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]==1){
                console.log(str[i]);
                console.log(freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]);
                
            }
    }

}
nonrepeated("ddhhrruuv");
nonrepeated("abacddbec");