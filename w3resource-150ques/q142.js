// Write a JavaScript program to simplify a given absolute path for a file in Unix-style


function unix(path){

    const path1 = path.split('/');
    const new_path=[]
    length=0;
    for(let i=0;i<path1.length;i++){
        const part = path1[i];
        if(part === '.' || part === '' || part === '..'){
            if(part === '..' && length>0){
                length--;
            }
            continue;
        }
        else{
            new_path[length++] = part;
        }
        
     }

     if(length===0){
        return '/';
     }
     let result = '';
     for(var i=0;i<length;i++){
        result += `/${new_path[i]}`
     }
     return result;

}

console.log(unix("/home/var/./www/../html//sql/"));