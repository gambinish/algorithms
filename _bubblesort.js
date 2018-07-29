// var sanityCheck = "sanity";
// console.log(sanityCheck);

// let array2 = [];
// while (array2.length < 10) {
//   array2.push(Math.floor(Math.random() * 50));
// }
// console.log(array2);

// function bubbleSort(array2) {
//   for (let i = 0; i < array2.length; i++) {
//     for (let j = 1; j < array2.length; j++) {
//       if (array2[j - 1] > array2[j]) {
//         [array2[j - 1], array2[j]] = [array2[j], array2[j - 1]];
//       }
//     }
//   }
//   return array2;
// }

// let sortedArr = bubbleSort(array2.slice());
// console.log(sortedArr);
// return sortedArr;

// console.timeEnd("sort");

module.exports = function() {
  console.time("sort");
  let array2 = [];
  while (array2.length < 10) {
    array2.push(Math.floor(Math.random() * 50));
  }
  console.log(array2);

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
  return sortedArr;

  console.timeEnd("sort");
};

///

// console.time("sort");

// function bubblesort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   {
//   }
// }

// console.timeEnd("sort");
// module.exports = bubbleSort;
