// class Id {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayhi() {
//     console.log(`Hello ${this.name}, your age is ${this.age}`);
//   }
// }

// const shivam = new Id("Ishan", 18);
// const ishan= new Id("Shivam",20);
// console.log(shivam.name);
// shivam.sayhi();
// ishan.sayhi();

const Id = function(name, age) {
  this.name = name;
  this.age = age;
  this.sayhi = function() {
    console.log(`Hello ${this.name}, your age is ${this.age}`);
  };
};

const aniket = new Id("aniket", 20);
console.log(aniket.name);
aniket.sayhi();

