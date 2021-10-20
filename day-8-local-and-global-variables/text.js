//global
var a = 5;
var b = 5;
for (let i = 0; i < 5; i++) {
  var comp = a + b;
  console.log("local variable: " + comp);
}
console.log("global variable: " + a);
