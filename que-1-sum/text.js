var array = [2, 3, 4, 5, 6, 7, 9, 10, 1, 6];
var newarray = array.slice(3, 7);
console.log("The extracted values are: " + newarray);
var sum = 0;
for (let i = 0; i < newarray.length; i++) {
  sum = sum + newarray[i];
}
console.log("Sum = " + sum);
