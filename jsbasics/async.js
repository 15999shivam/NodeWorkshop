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

//async await can be used only eith methods which is most of the cases
//every async method or function should have its own catch block to handle error ifany

//it seems more like in flow code and prevents from chaiing long then statements

const fun = async function() {
  let result = await sum2(1, 2);
  result = await sum2(result, 10);
  console.log(result);
};

fun();

//cleaner code :)
