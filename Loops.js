// for(let i=1; i<=10; i++){
//     console.log("Tushar")
// }

// let sum = 0;
// let n = 10;

// for (let i = 0; i <= n; i++) {
//     sum = sum + i
// }
// console.log("Sum =", sum);

// for (let i = 1; i >= 0; i++) {
//     console.log("i = ", i);
// }


// While loop

// let str = "Rutuja Tushar"

// for (let i of str) {
//     console.log("i=", i);
// }

// ***** Practice ******
// Print all even numbers from 0 to 100.


// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     } else {
//         console.log()
//     }
// }

// Create a game where you start with any random game number. Ask the user to keep guessing the game number until user enters correct value.

let randomNumber = Math.floor(Math.random() * 100)

let userGuess = parseInt(prompt("Guess a number between 1 to 100"))

while (randomNumber != userGuess) {
    if (randomNumber > 100) {
        console.log("You are too low, Please try again !")
    } else if (randomNumber < 100) {
        console.log("You are too high, Please try again !")
    }
}
console.log("Congratulations you are winner !!!")