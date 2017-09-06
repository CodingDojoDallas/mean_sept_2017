1


// function zero_negativity(arr) {
// 	for(let i = 0; i < arr.length-1; i++){
// 		if (arr[i] >= 0){
// 			console.log(true);
// 		}
// 		else {
// 			return false;
// 		}
// 	} 
// }

// zero_negativity([1,2,3,-4,5,0])


2 

// function is_even(num) {
// 	if(num%2 == 0) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

// is_even(5);


3

// function how_many_even(arr){
//   const arr2 = [];
// 	for (var i = 0 ; i < arr.length -1; i++) {
// 		if (arr[i] %2 == 0) {
// 			 arr2.push(arr[i])
// 		}
// 	}
// 	return arr2
// }

// how_many_even([1,2,3,4,5,6,7,8,9,10])


4 


// function create_dummy_array(n){
//   let y = []
//   for (var i = 0; i < n; i++){
//     let z = Math.floor(Math.random(z) * 10);
//     x.push(z)
//   }
//   return y
// }
// create_dummy_array(5)


5


function random_choice(arr){
  let y = []
  for (var i = 0; i < arr.length; i++){
    let z = Math.floor(Math.random(z) * arr[i]);
    y.push(z)
  }
  return y
}
random_choice([1,2,3,4,5,7,9,2])