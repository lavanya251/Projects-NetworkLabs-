//concat
let one = [1, 2, 3];
let two = [4, 5, 6];
let combine = one.concat(two);
console.log(combine);

//indexOf
let num = [1, 2, 3, 4, 5, 6];
console.log(num.indexOf(2));

//lastIndexOf
let num1 = [1, 2, 3, 4, 5, 6, 2];
console.log(num1.lastIndexOf(2));

//enclose
let num2 = [1, 2, 3, 4, 5, 6];
console.log(num2.includes(3));

//tostring
let num3 = ["Good", "Morning"];
let output = num3.toString();
console.log(output);
//console.log(num3);

//isArray
let num4 = ["Good", "Morning"];
let output1 = Array.isArray(num4);
console.log(output1);
//console.log(typeOf num4);

//arrow  function - filter
var num5 = [1, 2, 3, 4, 5];
var output2 = num5.filter((num5) => num5 != 0);
console.log(output2);

//arrow  function - forEach
var num6 = [1, 2, 3, 4, 5];
var output3 = num6.forEach((item) => {
  console.log(`${item + 1}`);
});

//arrow  function - map
var num7 = [1, 2, 3, 4, 5];
var output4 = num7.map((item) => {
  return ++item;
});
console.log(output4);

//without arrow function -filter
var num8 = [1, 2, 3, 4, 5];
var output5 = num8.filter(function (item) {
  return item % 2 == 0;
});
console.log(output5);

//without arrow  function - forEach
var num9 = [1, 2, 3, 4, 5];
var output6 = num9.forEach(function (item) {
  console.log(`${item + 2}`);
});

//without arrow  function - map
var num10 = [1, 2, 3, 4, 5];
var output7 = num10.map(function (item) {
  return ++item;
});
console.log(output4);
