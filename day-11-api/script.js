/*
fetch("./readme.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));
async function asyncFunc() {
  let result = await Promise;
  console.log(result);
}
asyncFunc();
*/

//comments
async function asyncFunc() {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments");
  let data = await response.json();
  console.log(data);
}
asyncFunc();

//todos
async function asyncFun() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data2 = await response.json();
  console.log(data2);
}
asyncFun();

//posts
async function asyncFunction() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data3 = await response.json();
  console.log(data3);
}
asyncFunction();
