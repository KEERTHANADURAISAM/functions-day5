// anonymous function
let array = function (a, k) {
  for (i = 0; i < k; i++) {
    a.unshift(a.pop());
  }
  return a;
};
console.log(array([1, 2, 3, 4, 5, 6, 7], 5))

// OUTPUT:
// (7) [3, 4, 5, 6, 7, 1, 2]
 
// arrow function
var array1= (a, k)=> {
  for (i = 0; i < k; i++) {
    a.unshift(a.pop());
   return a;
  }
 
}
console.log(array([1, 2, 3, 4, 5, 6, 7], 3))
// OUTPUT:
// rotate.js:20 (7) [5, 6, 7, 1, 2, 3, 4]