// function zero_negativity(arr){
//   for (let i in arr){
//     if (arr[i] < 0){
//       return false;
//     }
//   }
//   return true;
// }
//
// var x = [1,4,3,6,8,4,6];
// var y = [1,5,7,3,-2,9,-7,0];
// console.log(zero_negativity(x));

// function is_even(num){
//   if(num % 2 == 0){
//     return true;
//   }
//   return false;
// }
//
// console.log(is_even(4));

// var x = [1,4,3,6,8,4,6];
// var y = [1,5,7,3,-2,9,-7,0];
//
// function how_many_even(arr){
//   var counter = 0;
//   for (let i in arr){
//     if (is_even(arr[i])){
//       counter += 1;
//     }
//   }
//   return counter;
// }
//
// console.log(how_many_even(y));

// function create_dummy_array(n){
//   dArray = [];
//   for (let i = 0; i < n; i++){
//     r = Math.trunc(Math.random()*10)
//     dArray.push(r);
//   }
//   return dArray;
// }
//
// console.log(create_dummy_array(8));


function random_choice(arr){
  len = arr.length;
  r = Math.trunc(Math.random()*len);
  return arr[r];
}

var x = [1,4,1,4,7,4,9];
var y = [1,5,7,3,-2,9,-7,0];

console.log(random_choice(x));
