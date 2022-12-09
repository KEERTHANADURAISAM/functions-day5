// anonymous function
var Palindrome =function (arr) {
  var emp = [];
     for (let i=0;i<arr.length;i++) {
       var ans=arr[i].split("").reverse().join("");;
     // console.log(ans);
      if (ans == arr[i]) 
      {
        emp.push(arr[i]);
      }
     }
     return emp;
     }

console.log(Palindrome(["do geese see gods","madam", "I did did I"]));

// OUTPUT:
// (2) ['madam', 'I did did I']

// arrow function
var Palindrome = (arr)=> {
   var emp = [];
      for (let i=0;i<arr.length;i++) {
        var ans=arr[i].split("").reverse().join("");;
      // console.log(ans);
       if (ans == arr[i]) 
       {
         emp.push(arr[i]);
       }
      }
      return emp;
      }

console.log(Palindrome(["madam","KEERTHANA","uncle","amma","appa","121","333"]));


// OUTPUT:
// (6) ['madam', 'amma', 'appa', '121', '333']

// iife function

(function(arr) {
  var emp = [];
     for (let i=0;i<arr.length;i++) {
       var ans=arr[i].split("").reverse().join("");;
     // console.log(ans);
      if (ans == arr[i]) 
      {
        emp.push(arr[i]);
      }
     }
     console.log(emp);
     })

(["madam","KEERTHANA","uncle","amma","appa","121","333"]);

// OUTPUT:
// (6) ['madam', 'amma', 'appa', '121', '333']