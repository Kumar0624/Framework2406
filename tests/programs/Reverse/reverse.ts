

let original: string = "programming2";
let reversed: string = ""

const lengt =  original.length 

for( let i = lengt-1; i>=0;i--){

    reversed += original[i]
    
}
console.log(`Original String is : ${original}`);
console.log(`Reversed String is : ${reversed}`);

