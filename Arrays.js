// let myArr = ["Hulk", "Ironman", "Spiderman"];

// ****For loop*****
// for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
// }

// *****for of***

// for (let arr of myArr) {
//     console.log(arr);
// }

// let cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"];

// for (let city of cities) {
//     console.log(city);
// }

// practice que 1***********

let marks = [85, 9, 44, 37, 76, 60]

let sum = 0;

for (i = 0; i < marks.length; i++) {
    sum += marks[i];
}
// console.log(sum)

let avg = sum / marks.length;
// console.log(`Total sum of array is ${sum}`);

// parctice ques 2 *********
let item = [250, 645, 300, 900, 50];


for (let i = 0; i < item.length; i++) {
    let offer = item[i] / 10;
    item[i] = item[i] - offer;
}
// console.log(item);

// Arrays Method 

let foodItems = ["potato","apple","litchi","tomato"];
// console.log(foodItems);

foodItems.push("chips","burger","paneer");
// console.log(foodItems);

foodItems.pop("burger");
// console.log(foodItems);

// console.log(foodItems.toString())

let marvelHeroes = ["Spiderman", "Thor", "Hulk", "Captain America"];
let dcHeroes = ["Batman", "Superman", "Flash", "Green Lantern"];

let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

let heroes2 = heroes.slice(2, 5);
// console.log(heroes2);

console.log(heroes.shift());
marvelHeroes.unshift("antman");
// console.log(marvelHeroes);

// practice que on array

let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// companies.shift();
console.log(companies)

companies.splice(2, 1, "Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);