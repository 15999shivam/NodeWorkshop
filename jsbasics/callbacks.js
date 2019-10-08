//callback
const sum = function(a, b) {
  let c;
  c = a + b;
  return c;
};

const sum2 = function(a, b, callback) {
  let c;
  //simulation of long time taking task
  setTimeout(() => {
    c = a + b;
    callback(undefined, c);
  }, 2000);
};

sum2(4, 5, (error, val) => {
  console.log(val);
});

console.log(sum(1, 2));
