var _ = {
   map: function(arr, myCallback) {
       for (var i = 0; i < arr.length; i++) {
           arr[i] = myCallback(arr[i])
       }
       return arr
     //code here;
   },
   reduce: function(arr, myCallback, memo) {
       var total = memo
       for (var i = 0; i < arr.length; i++) {
           total += myCallback(arr[i], memo)
       }
       return total

     // code here;
   },
   find: function(arr, myCallback) {
       for (var i = 0; i < arr.length; i++) {
           if (myCallback(arr[i])) {
               return arr[i]
           } 
       }
     // code here;
   },
   filter: function(arr, myCallback) {
       newArr = []
       for (var i = 0; i < arr.length; i++) {
           if (myCallback(arr[i])) {
               newArr.push(arr[i])
           }
       }
       return newArr 
     // code here;
   },
   reject: function(arr, myCallback) {
       newArr = []
       for (var i = 0; i < arr.length; i++) {
           if (!myCallback(arr[i])) {
               newArr.push(arr[i])
           }
       }
       return newArr 
        
     // code here;
   }
 }

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);

var doubleList = _.map([2,3,5,1,2,3,4], function(num) {return num * 2})
console.log(doubleList)

var reduceList = _.reduce([1,2,3,4,2,3,5], function(num, memo) {return num + memo}, 0)
console.log(reduceList)

var find2 = _.find([1,3,5,2,3,5], function(num) {return num === 2})
console.log(find2)

var findFirstEven = _.find([1,2,3,4,3,5,7,5,4,5], function(num) {return num % 2 === 0})
console.log(findFirstEven)

var divisBy7 = _.filter([1,2,3,4,7,13,14,15,21,22,5], function(num) {return num % 7 === 0})
console.log(divisBy7)

var notDivisBy7 = _.reject([1,2,3,4,7,13,14,15,21,22,5], function(num) {return num % 7 === 0})
console.log(notDivisBy7)

