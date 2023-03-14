const sum = (a, b) => console.log(a + b);

setTimeout(() => {
  sum(3, 2);
}, 0);

console.log(1);
sum(2, 2);
console.log(2);
console.log(3);
// 1 - synch operations, 2 - API calls, 3 - timeouts/intervals

// states of promises  1. pending, 2. fullfilled, 3. rejected
const promise = new Promise((resolve, reject) => {
  resolve("We did it!");
  reject("something went wrong");
});
console.log(promise);

// methods - then (success),  catch finally
promise
  .then((response) => console.log(`Success ${response}`))
  .catch((err) => console.log(`Some error ${err}`))
  .finally(() => console.log("Loading finished"));
