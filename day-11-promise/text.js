//creating a promise
let completed = true;
let promise = new Promise(function (resolve, reject) {
  if (completed) {
    resolve("Finished Completely ");
  } else {
    reject("Not completed");
  }
});
console.log(promise);

/*
//then()
let completed = true;
let promise = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});
promise
  .then(function success(result) {
    console.log(result);
  })
  .then(function success() {
    console.log("call other function");
  });
console.log(Promise);



//catch
let completed2 = true;
let promise2 = new Promise(function (resolve, reject) {
  reject("Promise not resolved");
});
promise
  .then(function sucess(result) {
    console.log(result);
  })
  .catch(function error(result) {
    console.log(result);
  });
console.log(promise);



//finally
let completed3 = true;
let promise3 = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});
promise.finally(function greet() {
  console.log("Finished");
});
console.log(promise);
*/
