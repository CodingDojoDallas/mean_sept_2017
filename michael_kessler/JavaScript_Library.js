var _ = {
   map: function(array, callback) {
     for(var i = 0; i < array.length; i++){
         array[i] = callback(array[i]);
     }
   },

   reduce: function(array, callback, memo) {
       for(var i = 0; i < array.length; i++) {
          memo = callback(memo, array[i]);
       }
       return memo;
   },

   find: function(array, callback) {
     for(var i = 0; i < array.length; i++) {
        if (callback(array[i]) == true) {
            return array[i];
        }
    }
     return undefined
   },

   filter: function(array, callback, new_array = []) {
      for(var i = 0; i < array.length; i++){
        if(callback(array[i]) == true){
          new_array.push(array[i])
        }
      }
      return new_array
   },

   reject: function(array, callback, new_array = []) {
     for(var i = 0; i < array.length; i++){
      if(callback(array[i]) == false){
        new_array.push(array[i])
      }
     }
     return new_array
   }
 }

// var array = [1, 2 ,3]
// _.map(array, function callback(num){ return num * 3; });
// console.log(array);

var evens = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);