const sum = function(a, b) {
  let c;
  c = a + b;
  return c;
};

const sum2 = function(a, b) {
  return new Promise(function(resolve, reject) {
    // setTimeout(() => resolve(1), 1000); // (*)
    setTimeout(() => {
      try {
        let c = a + b;
        resolve(c);
      } catch (e) {
        reject(e);
      }
    }, 2000);
  });
};

let result = sum2(1, 2);
result
  .then(val => {
    console.log(val);
    return val; //if i return from one then then it goes to other then XD.
  })
  .then(val => {
    //undefined comig from here!
    console.log(val);
  })
  .catch(error => {
    console.log(error);
  });

console.log(result);

//promise chaining

// result = sum2(1, 2);
// result
//   .then(val => {
//     console.log(val);
//     return sum2(val, 4);
//   })
//   .then(val => {
//     //undefined comig from here!
//     console.log(val);
//   })
//   .catch(error => {
//     console.log(error);
//   });
