// const bubbleSort = function() {
//   let arr = [];
//   let sortedArr = [];

//   while (arr.length < 10) {
//     arr.push(Math.floor(Math.random() * 100));
//   }
//   // console.log(arr);

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; i++) {
//       if (arr[j - 1] > arr[j]) {
//         arr[j - 1], (arr[j] = arr[j]), arr[j - 1];
//       }
//     }
//   }

//   return arr;
// };
// bubbleSort();
// console.log(bubbleSort.slice());
// // console.log(bubbleSort(arr.slice()));

// // let sortedArr = bubbleSort(arr.slice());
// // console.log(sortedArr);

// // console.log(sortedArr);

// const bubbleSort = function() {
//   let arr = [];
//   let sortedArr = [];

//   while (arr.length < 10) {
//     arr.push(Math.floor(Math.random() * 100));
//   }
//   console.log(arr);

//   // sortingAlg(){

//   // }
// };
// bubbleSort;

console.time("sort");

let array2 = [];
while (array2.length < 10) {
  array2.push(Math.floor(Math.random() * 50));
}

function bubbleSort(array2) {
  for (let i = 0; i < array2.length; i++) {
    for (let j = 1; j < array2.length; j++) {
      if (array2[j - 1] > array2[j]) {
        [array2[j - 1], array2[j]] = [array2[j], array2[j - 1]];
      }
    }
  }
  return array2;
}

let sortedArr = bubbleSort(array2.slice());
console.log(sortedArr);

console.timeEnd("sort");
