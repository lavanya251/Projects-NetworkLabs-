//push
var arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);

//pop
var arr1 = [1, 2, 3, 4, 5];
arr1.pop();
console.log(arr1);

//shift
var arr2 = [1, 2, 3, 4, 5];
arr2.shift();
console.log(arr2);

//unshift
var arr3 = [1, 2, 3, 4, 5];
arr3.unshift(6);
console.log(arr3);

//slice
var arr4 = [1, 2, 3, 4, 5];
var newArr = arr4.slice(0, 3);
console.log(newArr);

//splice index-removing elements
var arr5 = [1, 2, 3, 4, 5];
arr5.splice(1, 3);
console.log(arr5);

//splice deletion
var arr6 = [1, 2, 3, 4, 5];
var newArr1 = arr6.splice(1, 3);
console.log(newArr1);

//splice adding element
var arr7 = [1, 2, 3, 4, 5];
arr7.splice(5, 0, 6, 7);
console.log(arr7);

//split
let Name = "Hello Good Morning";
var newName = Name.split(" ", 3);
console.log(newName);

//Even or Odd
var even = [];
var odd = [];
for (let i = 10; i < 20; i++) {
  if (i % 2 == 0) {
    even.push(i);
  } else {
    odd.push(i);
  }
}
console.log(even);
console.log(odd);
