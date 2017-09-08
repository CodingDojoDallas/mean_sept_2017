var _ = {
   map: function(arr,  callback) {
        let output = [];
        for (let elem in arr){
            output.push(callback(arr[elem]));
        }
        return output;
     },

   reduce: function(arr, callback, memo = 0) { 
     for (var i = 0; i < arr.length; i++){
        memo = callback(memo, arr[i]);
     }
     return memo;
   },
   find: function(arr, callback) {   
     for (var i = 0; i < arr.length; i++){
        if (callback(arr[i])){
          return arr[i];
        }
     }
   },
   filter: function(arr, callback) { 
     var newArr = [];
     for (var i = 0; i < arr.length; i++){
        if (callback(arr[i])){
            newArr.push(arr[i]);
        }
     }
     return newArr;
   },
   reject: function(arr, callback) { 
     var newArr = [];
     for (var i = 0; i < arr.length; i++){
        if (!callback(arr[i])){
            newArr.push(arr[i]);
        }
     }
     return newArr;
   }
 }


var mapList = _.map([1, 2, 3,], function(num) { return num * 3 });
console.log(mapList);

var listReduce = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(listReduce);

var listFind = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(listFind);

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);

var listReject = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(listReject);