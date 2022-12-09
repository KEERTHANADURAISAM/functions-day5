// anonymous function
let sum=function(arr){
    let total=0;
    for(let i=0; i<arr.length; i++){
total=total+arr[i];
    }
return total;
}
console.log(sum([5,3,5,7,8,9,10,11,12,13,14,15]));

// OUTPUT:
// sum.js:9 112

// iife function
(function(arr){
    let total=0;
    for(let i=0; i<arr.length; i++){
total=total+arr[i];

    }
    console.log(total);
})
([100,200,300,400,500,10001]);

// OUTPUT:
// sum.js:18 11501

// arrow function
let add=(arr)=>{
    let total=0;
    for(let i=0; i<arr.length; i++){
total=total+arr[i];
    }
return total;
}
console.log(add([5,3,5,7,8,9,10,11,12,13,14,15]));

// OUTPUT:
// sum.js:30 112
