var _ = {
   map: function(list, callback){
     //code here;

       output = [];
       for (let item in list){
         output.push(callback(list[item]));
       }
       return output;
    },
   reduce: function(list, callback, memo) {
     // code here;
     var count = 0;
     if (!memo){
       memo = list[0];
       count = 1;
     }
     for (var i = count; i < list.length; i++){
       memo = callback(list[i], memo);
     }
     return memo;
   },
   find: function(arr, callback) {
     // code here;
     for(let item of arr){
       if(callback(item) === true)
       return item;
     }
     return "item not found"
   },
   filter: function(arr, callback) {
     let output = [];
     for(let item of arr){
       if(callback(item) === true){
         output.push(item);
       }
     }
     return output;
     // code here;
   },
   reject: function(arr, callback) {
     // code here;
     let output = [];
     for (let item of arr){
       if(callback(item)===false){
         output.push(item);
       }
     }
     return output;
   }
 }

 // var result = _.filter([1,2,3,4,5], function(num){ return num === 3 });
 // console.log(result);
 //
 // var resultFind = _.find([1,2,3,4,5], function(num){ return num > 3 && num < 5 });
 // console.log(resultFind);

 // var resultMap = _.map([1,2,3,4,5], function(num){ return num * 5 });
 // console.log(resultMap);
 //
 // var resultMap = _.map({one: 1,two: 2,three: 3}, function(num){ return num * 5 });
 // console.log(resultMap);

// var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// console.log(sum);
