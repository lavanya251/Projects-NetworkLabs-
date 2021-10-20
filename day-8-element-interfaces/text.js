//by id
var button = document.getElementById("btn");
console.log(button);
var open = function () {
  alert("Have a nice day");
};
button.addEventListener("click", open);

//by class name
var para = document.getElementsByClassName("para");
console.log(para);

//by tag name
var para1 = document.getElementsByTagName("p");
console.log(para1);

//query selector
var para2 = document.querySelector(".para");
console.log(para2);

//query selector all
var para3 = document.querySelectorAll(".para");
console.log(para3);
