//Write a JavaScript exercise to get the extension of a filename.

filename = "random.exe"

filename1 = "random.js"
filename2 = "random.huraah"
filename3 = "random.cpp"

function exten(filename){
    console.log(filename.split('.').pop());
}

exten(filename);
exten(filename1);
exten(filename2);
exten(filename3);


