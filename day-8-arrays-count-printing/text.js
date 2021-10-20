var array = [2, 3, 4, 5, 7, 20, 19, 2, 78, 62];
let counts = {};
for (let i = 0; i < array.length; i++) {
  if (counts[array[i]]) {
    counts[array[i]] = counts[array[i]] + 1;
  } else {
    counts[array[i]] = 1;
  }
}
console.log(counts);

var arr = [5, 10, 86, 33, 5, 45, 5, 20, 15, 11];
let count = {};
for (let i = 0; i < arr.length; i++) {
  if (count[arr[i]]) {
    count[arr[i]] = count[arr[i]] + 1;
  } else {
    count[arr[i]] = 1;
  }
}
console.log(count);
