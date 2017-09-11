var _ = {
   map: function(array, callback) {
     for( var i = 0; i < array.length; i++ ){
       array[i] = callback(array[i])
     }
   },
   reduce: function(array, callback, memo) {
     let elm = 0;
     if(!memo) {
       memo = array[0];
       elm = 0;
     }
     for( let i = elm; i < array.length; i ++){
       memo = callback(array[i], memo);
     }
     return memo;
   },
   find: function(array, callback) {
     for(var i = 0; i < array.length; i++){
       if(callback(array[i])){
         return array[i];
       }
     }
   },
   filter: function(array, callback) {
     var toryarray = [];
     for(var i = 0; i < array.length; i++) {
       if(callback(array[i])){
         toryarray.push(array[i]);
       }
     }
     return toryarray;
   },
   reject: function(array, callback) {
     var temparr = [];
     for(var i = 0; i < array.length; i ++) {
       if(!callback(array[i])){
         temparr.push(array[i]);
       }
     }
     return temparr;
   }
 }
// you just created a library with 5 methods!
var array = [3,4,5]
_.map(array, function callback(x){return x * 5});
console.log(array);
console.log(_.reduce(array, function callback(x, memo){return x + memo;}));
console.log(_.find(array,function callback(x){return x == 15;}));
_.filter(array, function(x){return x > 20;})
console.log(array);
