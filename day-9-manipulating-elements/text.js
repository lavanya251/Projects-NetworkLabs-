//create element
var btn1 = document.getElementById("btn1");
console.log(btn1);
var createElement = function () {
  var newElement = document.createElement("div");
  console.log(newElement);
};
btn1.addEventListener("click", createElement);

//append child
var btn2 = document.getElementById("btn2");
console.log(btn2);
createElement = function () {
  var newElement1 = document.createElement("div");
  document.body.appendChild(newElement1);
  console.log(newElement1);
};
btn2.addEventListener("click", createElement);

// adding text
var btn3 = document.getElementById("btn3");
console.log(btn3);
createElement = function () {
  var newElement2 = document.createElement("div");
  newElement2.textContent = "hello";
  console.log(newElement2);
};
btn3.addEventListener("click", createElement);

//replace child
var btn4 = document.getElementById("btn4");
console.log(btn4);
createElement = function () {
  var newElement3 = document.createElement("div");
  newElement3.textContent = "hello";
  var replace = document.getElementById("replace");
  var replaceMe = document.getElementById("replaceMe");
  replace.replaceChild(newElement3, replaceMe);
  console.log(replaceMe);
};
btn4.addEventListener("click", createElement);

//remove text
var btn5 = document.getElementById("btn5");
console.log(btn5);
createElement = function () {
  var addHere1 = document.querySelector(".addHere1");
  var removeText = document.getElementById("removeText");
  addHere1.removeChild(removeText);
};
btn5.addEventListener("click", createElement);
