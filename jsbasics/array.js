//linear data structure

//forEach, map, filter,sort reverse,spread operator,

//map function
array = [10, 20, 30, 40];
// pass a function to map
let map = array.map(x => x * 10);
console.log("mapped array: " + map); // [100, 200, 300, 400]
console.log("original array: " + array); //array remains the same

//===========================================================================================

//forEach : to loop through array
const originalArray = [1, 2, 3, 4, 5];
const newArray = [];

originalArray.forEach((number, i) => {
  newArray[i] = number * 5;
});

console.log("forEach: " + newArray); // [5, 10, 20, 25]

//===================================================================================================

//Filter function
var numbers = [10, 20, 30, 24, 25, 31];
const result = numbers.filter(number => number < 30);
console.log("filtered array: " + result); //[10, 20, 24, 25]

//======================================================================================================

//Sort function
let arraySort = ["India", "Germany", "China", "Japan"];
console.log("sorted array: ", arraySort.sort()); //["China", "Germany", "India", "Japan"]
console.log("aftersort: " + arraySort); //changes the original array

//==========================================================================================================

//Reverse function
console.log("reversed array: ", arraySort.reverse()); //["Japan", "India", "Germany", "China"]
console.log("afterreverse: " + arraySort); //changes the original array

//=====================================================================================================

//spread operator :making standalone copy of array
let spread = [1, 2, 3, 4, 5, 6];

let duplicate = spread; //now duplicate and spread points to same reffrence

duplicate.pop(); //removes 6 from both arrays(they point to same array)

let mightyraju = [...duplicate];

duplicate.pop(); //removes only from duplicate and spread arrays nt from mightyraju

console.log("duplicate: " + duplicate);
console.log("spread: " + spread);
console.log("mighty raju: " + mightyraju);

//=========================================================================================================

// link to more info:https://codeburst.io/javascript-essentials-arrays-2d275b9598c5
