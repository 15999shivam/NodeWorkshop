//types of functions

//regular functions
function sayhi() {
  console.log("hi");
}
sayhi();

const sayhi1 = function() {
  console.log("hi");
};
sayhi1();

//=====================================================================

//anonymous  functions (i call myself)
(function() {
  console.log("i am getting called");
})();

//=====================================================================

//arrow functions
const saybye = () => {
  console.log("byee");
};

saybye();

//===================================================================

//short hand syntax
const fun = (a, b) => {
  return a + b;
};

const fun2 = (a, b) => a + b;

console.log(fun(1, 2));
console.log(fun(5, 6));

//diffrence between the arrow and regualar function is covered in objects part;


//PRINTING AN ARRAY USING ARROW FUNCTION

let arr=[1,2,3,4];

arr.forEach(val=>console.log(val));