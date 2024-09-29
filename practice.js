// let num = prompt("Enter a number: ")

// if (num % 5 === 0){
//     console.log("Number is multiplied by 5");
// }
// else{
//     console.log("Number is not Multiplied by 5");
// }
// console.log(num);

let score = prompt("Enter your score: ")


if( score>= 80 && score<= 100){
    console.log("Your Grade is A");
}
else if( score>= 70 && score<= 89){
    console.log("Your Grade is B");
}
else if( score>= 60 && score<= 69){
    console.log("Your Grade is C");
}
else if( score>= 50 && score<= 59){
    console.log("Your Grade is D");
}
else if ( score>= 0 && score<= 49){
    console.log("Your Grade is F");
}
else{
    console.log("you are fail");
}
