// anonymous function
var prime=function(array){
  array=array.filter((ele)=>{
for(i=2; i<=Math.sqrt(ele); i++){
if(ele % i===0){
  return false;
}
return true;
}
})
return array;
}
console.log(prime([1,13,15,17,19,18,4,6,8]))

// OUTPUT:prime.js:52 (4) [13, 15, 17, 19]
// -----------------------------------------------------------
// iife function
(function (array){
  for(let i=0; i<Math.sqrt(array[i]);i++){
if(array[i]%2==1){
console.log(array[i])
}
    }
})
([1,13,15,17,19,18,4,6,8]);
 
// Output:
// prime.js:47 1
// prime.js:47 13
// prime.js:47 15
// prime.js:47 17
// prime.js:47 19
// ---------------------------------------------------------------

// arrow function 
var prime1=(array1)=>{
  array1=array1.filter((ele)=>{
for(i=2; i<=Math.sqrt(ele); i++){
if(ele % i===0){
  return false;
}
return true;
}
})
return array1;
}
console.log(prime1([1,13,15,17,19,18,4,6,8,9,111,177]))
// output:
// prime.js:65 (7) [13, 15, 17, 19, 9, 111, 177]

