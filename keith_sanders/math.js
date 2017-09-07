//Math 1
function zero_negativity(array){
  for(let i in array){
    if (array[i] < 0 ){
      return false;
    }
  }
  return true;
}
var queen_dildo = [1,2,43,4654,3233]
var king_vagina = [-13,-12,-22,493,435]
console.log(zero_negativity(queen_dildo));
console.log(zero_negativity(king_vagina));
//Math 2
function is_even(array){
  for(let i in array){
    if (array[i] % 2 == 0)
    return true;
  }
  return false;
}

var duke_ass = [2,4,34,6,28,200]
var stupid_monkey = [-3,1,5,-7,9]
console.log(is_even(duke_ass));
console.log(is_even(stupid_monkey));


//Math 3
function has_many_even(arr) {
  var count = 0;
  for(let i = 0; i < arr.length; i ++) {
    if (is_even(arr[i])){
      count += 1;
    }
  }
  return count;
}

var t = [2,4,6,8,10]
var p = [-1,1,3,5,7,9,13]
console.log(has_many_even(t));

//Math 4
function create_dummy_array(n){
  let arr = [];
  for(let i = 0; i < n ; i++){
    arr.push(Math.floor(Math.random()*arr.length));
  }
  return arr
}

console.log(create_dummy_array(26));
console.log(create_dummy_array(9));

//Math 5
function random_choice(ar){
  let i = Math.floor(Math.random()*ar.length);
  return ar[i];
}

console.log(random_choice([1,2,3,4,44]));
