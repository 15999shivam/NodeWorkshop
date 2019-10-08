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

//array of objects

// const products = [
//   { name: "Mobile", prices: [1000, 2000] },
//   { name: "Playstation", prices: [200, 300] }
// ];
// const allPrcies = products.map(products => products.prices);
// console.log(allPrcies); // [[1000, 2000], [200, 300]]
