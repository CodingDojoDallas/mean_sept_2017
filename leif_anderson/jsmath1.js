/*  jsmath1.js
    leif anderson 9/6/17
*/

function zero_negativity(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    if (arr[i] < 0) return false;
  }
  return true;
}

x = [0,1,2];
console.log(zero_negativity(x));
x.push(-1);
console.log(zero_negativity(x));

function is_even(n) {
  if (n%2 == 0) return true;
  else return false;
}

console.log(is_even(20000));
console.log(is_even(20033));

function how_many_even(arr) {
  var len = arr.length;
  var count = 0;
  for (var i = 0; i < len; i++) {
    if (is_even(arr[i])) count++;
  }
  return count;
}

console.log(x);
console.log(how_many_even(x));

function create_dummy_array(n) {
  arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(Math.round(Math.random() * 9));
  }
  return arr;
}

var z = create_dummy_array(20);
console.log(z);

function random_choice(arr) {
  return arr[(Math.floor(Math.random() * arr.length))];
}

console.log(random_choice(z));
console.log(random_choice(z));
