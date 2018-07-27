console.time("sort");

let arr = [];

while (arr.length < 10) {
  arr.push(Math.floor(Math.random() * 50));
}
console.log(arr);

function quickSort(arr) {
  let pivot = arr[0];
  let left = [];
  let right = [];
  let i = 0;

  if (arr.length <= 1) {
    return arr;
  } else {
    for (i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  // return left.concat(pivot, right); // return only once
  return quickSort(left).concat(pivot, quickSort(right)); // recursively call function
}
console.log(quickSort(arr));

console.timeEnd("sort");
