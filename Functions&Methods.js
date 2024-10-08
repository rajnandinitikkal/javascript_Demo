function myFunction(){
    console.log("Hello world");
    document.write("Apna College");
}
// myFunction();

function CallValues(msg,n){
    // parameter --> input
     console.log(msg,n);
}
// This is argument
// CallValues("Tushar", 700);

// function 
function sum(x,y){
    console.log(x + y);
}

// sum(10,20);

// Arrowfunctions

// const arrowsum = (a,b) => {
//     console.log(a + b);
// }

// const arrowmul = (a,b) =>{
//     console.log(a*b);
// }

// Practice que set

function countVowels(str){
let count =0;
for(const char of str){
    if(char === 'a' ||
        char === 'e' ||
        char === 'i' ||
        char === 'o' ||
        char === 'u'){
        count++;
}
}
console.log(count);
}

const countVowels = (str) => {
    let count =0;
    for(const char of str){
        if(char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u'){
            count++;
    }
    }
    return count;  
}

