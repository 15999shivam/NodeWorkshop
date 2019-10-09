//objets are real world entities or to encapsulate data
//these are just key value pair

const me = {
  name: "shivam",
  age: 20,
  greet: function() {
    console.log(`hii ${this.name}`);
  }
};

console.log(me.name);
me.greet();

const me2 = {
  name: "shivam",
  age: 20,
  greet: () => {
    console.log(`hii ${this.name}`);
  }
};

console.log(me2.name);
me2.greet();

const json = JSON.stringify(me);
console.log(me);
console.log(json); //do not stringyfy functions (can be done but not recomemded)

const object = JSON.parse(json);
console.log(object);

// JSON has no means to represent a function. It is a data format designed for simplicity and compatibility across languages (and a function is the last thing that will be cross-language compatible).

//=======================================================================================================================

//classes using class keyword
class Id {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayhi() {
    console.log(`Hello ${this.name}, your age is ${this.age}`);
  }
}

const shivam = new Id("Shivam", 20);
console.log(shivam.name);
shivam.sayhi();

//==================================================================================================

//class using function
const Id2 = function(name, age) {
  this.name = name;
  this.age = age;
  this.sayhi = function() {
    console.log(`Hello ${this.name}, your age is ${this.age}`);
  };
};

const aniket = new Id("aniket", 20);
console.log(aniket.name);
aniket.sayhi();

//===============================================================================================================

//array of objects

// const products = [
//   { name: "Mobile", prices: [1000, 2000] },
//   { name: "Playstation", prices: [200, 300] }
// ];
// const allPrcies = products.map(products => products.prices);
// console.log(allPrcies); // [[1000, 2000], [200, 300]]
