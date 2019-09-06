// console.time("sort");

let unsorted = [];

while (unsorted.length < 10) {
  unsorted.push(Math.floor(Math.random() * 100));
}
// console.log(arr);

// function quickSort(arr) {
//   let pivot = arr[0];
//   let left = [];
//   let right = [];
//   let i = 0;

//   if (arr.length <= 1) {
//     return arr;
//   } else {
//     for (i = 1; i < arr.length; i++) {
//       if (arr[i] <= pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//   }
//   // return left.concat(pivot, right); // return only once
//   return quickSort(left).concat(pivot, quickSort(right)); // recursively call function
// }
// console.log(quickSort(unsorted));

// console.timeEnd("sort");


function quickSort(arr) {
  let less = []
  let equal = []
  let greater = []

  if (arr.length <= 1) {
    return arr
  } else {
    let pivot = arr[0]
    arr.forEach((num) => {
      if (num < pivot) {
        less.push(num)
      }
      if (num === pivot) {
        equal.push(num)
      }
      if (num > pivot) {
        greater.push(pivot)
      }
    })
    return quickSort(less).concat(equal).concat(quickSort(greater))
  }
}
console.log(quickSort(unsorted))