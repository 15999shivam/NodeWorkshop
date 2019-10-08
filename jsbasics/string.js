//reverse a string in js
let a = "ha hu  diff";
console.log(
  a
    .split(" ") //aplit the string using the passed value annd convert to array
    .reverse() //reverse the array
    .join() // joins any array with the value passed if not then ','
);

//=====================================================================================

//replce function
console.log(a.replace("ha", "shivam"));
console.log(a); //do  ot change the orroginal string

//====================================================================

//template literals
name = "shivam";
age = 20;

console.log("hi " + name + " your age is " + age);

console.log(`hi ${name} your age is ${age}`); //magic, more like writing inline with the string.
