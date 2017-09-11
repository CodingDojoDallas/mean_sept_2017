var _ = {
   map: function(arr, callback) {
     //create a new array;
     let output = [];
     //apply the callback to each element in the input array
     for(let i of arr){
       console.log('i:', i);
       output.push(callback(arr[i]))
     }
     //return the new array
     return output;

   },
   reduce: function(arr, callback, memo=0){
     // code here;
   },
   find: function() {
     // code here;
   },
   filter: function() {
     // code here;
   },
   reject: function() {
     // code here;
   }
 }
// you just created a library with 5 methods!
