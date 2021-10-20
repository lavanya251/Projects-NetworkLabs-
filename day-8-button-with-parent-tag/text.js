var btn = document.getElementById("btn1");
var paraTag = document.querySelector(".para1");
console.log(paraTag);
console.log(btn);
function parentElement() {
  console.log(paraTag.parentNode);
}
btn.addEventListener("click", parentElement);

var btn2 = document.getElementById("btn2");
var paraTag2 = document.querySelector(".para2");
//console.log(paraTag2);
//console.log(btn2);
function firs() {
  console.log(paraTag2.firstChild);
}
btn2.addEventListener("click", parentElem);

var btn3 = document.getElementById("btn3");
var paraTag3 = document.querySelector(".para3");
//console.log(paraTag3);
//console.log(btn3);
function parentEle() {
  console.log(paraTag3.nextElementSibling);
}
btn3.addEventListener("click", parentEle);
