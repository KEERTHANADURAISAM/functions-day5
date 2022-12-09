// anonymous function
var odd = function (array) {
  var result1 = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      result1.push(array[i]);
    }
  }
  return result1;
};
var array = [6, 5, 4, 3, 7, 8, 9, 11, 13, 45];
console.log(odd(array))
  // output
  // [5, 3, 7, 9, 11, 13, 45]
  // 0: 5
  // 1: 3
  // 2: 7
  // 3: 9
  // 4: 11
  // 5: 13
  // 6: 45
  // length: 7


// arrow function
var oddNum = (array2) => {
  var result = [];
  for (i = 0; i < array2.length; i++) {
    if (array2[i] % 2 != 0) {
      result.push(array2[i]);
    }
  }
  return result;
};
console.log(oddNum([3, 2, 5, 7, 89, 01]));
// output
// [3, 5, 7, 89, 1]
// 0: 3
// 1: 5
// 2: 7
// 3: 89
// 4: 1
// length: 5
// [[Prototype]]: Array(0)

//   iife function
(function oddno(array1) {
  var result = [];
  for (i = 0; i < array1.length; i++) {
    if (array1[i] % 2 != 0) {
      result.push(array1[i]);
    }
  }
  console.log(result);
}
)([7, 12, 75, 79, 99, 11, 13, 5, 56]);


// output
// (7) [7, 75, 79, 99, 11, 13, 5]
// 0:7
// 1: 75
// 2: 79
// 3: 99
// 4: 11
// 5: 13
// 6: 5
// length: 7
// [[Prototype]]: Array(0)