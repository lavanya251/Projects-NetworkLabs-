//resolve
let completed = true;
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("resolved");
  }, 2000);
});

async function asyncFunc() {
  let result = await Promise;
  console.log(result);
  console.log("lavanya");
}
asyncFunc();

//reject
let completed1 = true;
let promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("rejected");
  }, 2000);
});

async function asyncFunction() {
  let result = await promise1;
  console.log(result);
  console.log("lavanya");
}
promise1
  .then(function success(result) {
    console.log(result);
  })
  .catch(function error(result) {
    console.log(result);
  });
