// // Split the array into halves and merge them recursively
// function mergeSort(arr) {
//   if (arr.length === 1) {
//     // return once we hit an array with a single item
//     return arr;
//   }

//   const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
//   const left = arr.slice(0, middle); // items on the left side
//   console.log(left);
//   const right = arr.slice(middle); // items on the right side
//   console.log(right);

//   return merge(mergeSort(left), mergeSort(right));
// }

// // compare the arrays item by item and return the concatenated result
// function merge(left, right) {
//   let result = [];
//   let indexLeft = 0;
//   let indexRight = 0;

//   while (indexLeft < left.length && indexRight < right.length) {
//     if (left[indexLeft] < right[indexRight]) {
//       result.push(left[indexLeft]);
//       indexLeft++;
//     } else {
//       result.push(right[indexRight]);
//       indexRight++;
//     }
//   }

//   return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
// }

// const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
// console.log(list);
// console.log(mergeSort(list)); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]

// creates a randomized array
// let testArr = [];
// while (testArr.length < 10) {
//   testArr.push(Math.floor(Math.random() * 100));
// }

// // mergeSort array
// function mergeSort2(myArr) {
//   // when an array is reduced to one element, return. need this for recreation of array
//   if (myArr.length === 1) {
//     return myArr;
//   }

//   // divides the array into 2 equal parts
//   const middle = Math.floor(myArr.length / 2);
//   // takes the first half of the array, and stores that in the 'left' variable
//   const left = myArr.slice(0, middle);
//   // takes the second half of the array (after middle), and stores that in the 'right' variable
//   const right = myArr.slice(middle);

//   return merge(mergeSort2(left), mergeSort2(right));
// }

// function merge(left, right) {
//   let result = [];
//   let indexLeft = 0;
//   let indexRight = 0;

//   while (indexLeft < left.length && indexRight < right.length) {
//     if (left[indexLeft] < right[indexRight]) {
//       result.push(left[indexLeft]);
//       indexLeft++;
//     } else {
//       result.push(right[indexRight]);
//       indexRight++;
//     }
//   }
//   return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
// }
// console.log(testArr);
// console.log(mergeSort2(testArr));

////////////////////////////////

// let myArr = [];

// while (myArr.length < 10) {
//   myArr.push(Math.floor(Math.random() * 100));
// }
// // console.log(myArr);

// function mergeSort(arr) {
//   if (arr.length === 1) {
//     return arr;
//   }

//   let middle = Math.floor(arr.length / 2);
//   let left = arr.slice(0, middle);
//   let right = arr.slice(middle);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [];
//   let indexLeft = 0;
//   let indexRight = 0;

//   while (indexLeft < left.length && indexRight < right.length) {
//     if (left[indexLeft] < right[indexRight]) {
//       result.push(left[indexLeft]);
//       indexLeft++;
//     } else {
//       result.push(right[indexRight]);
//       indexRight++;
//     }
//     return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
//   }
// }
// console.log(myArr);
// console.log(mergeSort(myArr));
// // console.log();

/////////////////

let unsortedArr = [];

while (unsortedArr.length < 10) {
  unsortedArr.push(Math.floor(Math.random() * 100));
}
// console.log(unsortedArr);

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
s;

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
    // return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
    return result.concat(left.concat(right));
  }
}
console.log(unsortedArr);
console.log(mergeSort(unsortedArr));
