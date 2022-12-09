// anonymous function

var low = function (element) {
  var res = element
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
  var res1 = res.join(" ");
  return res1;
};

console.log(low("this is an anonymous function"));

// OUTPUT:
// camelcase.js:11 This Is An Anonymous Function


// iife function
(function (arr) {
  var s = arr.split(" ");
  var m=s .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()) .join(" ");
  console.log(m);
})("this is an iife function");

// OUTPUT:
// camelcase.js:16 This Is An Iife Function

//arrow function
let up = (array) => {
  let step1 = array.toLowerCase().split(" ");
  let step2 = step1.map(
    (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
  );
  let step3 = step2.join(" ");
  console.log(step3);
};
up("this is an arrow function");

// OUTPUT:
// camelcase.js:25 This Is An Arrow Function