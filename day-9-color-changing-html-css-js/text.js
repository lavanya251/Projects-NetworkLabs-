var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var all = document.querySelector(".all");
var coloryellow = function () {
  all.classList.add("yellow");
};

all = document.querySelector(".all");
var colorred = function () {
  all.classList.add("red");
};

all = document.querySelector(".all");
var colorblue = function () {
  all.classList.add("blue");
};

btn1.addEventListener("click", coloryellow);
btn2.addEventListener("click", colorred);
btn3.addEventListener("click", colorblue);
