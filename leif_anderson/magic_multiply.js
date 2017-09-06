/*  magic_multiply.js
    leif anderson 9/6/17
*/

function magic_multiply(x, y) {
  var ret = null;
  // any combination of 5 and 2 yeilds a proper multiply
  if ((x==5 && y==2) || (x==2 && y==5)) ret *= y;
  // triggered only if both inputs are zero
  else if (x==0 && y==0) ret = 'All inputs are zero';
  // check if one input is an array, multiply each element by second value
  else if (Array.isArray(x) && (typeof(y) == 'number')) {
    var len = x.length;
    for (var i = 0; i < len; i++) x[i] *= y;
    ret = x;
  }
  else if ((typeof(x) == 'string') && (typeof(y) == 'string')) ret = 'Cannot multiply strings';
  // ok, we CAN multiply A string after all ...
  else if ((typeof(x) == 'string') && (typeof(y) == 'number')) {
    var temp = x;
    for (var i = 1; i < y; i++) x += temp;
    ret = x;
  }
  return ret;
}

console.log(magic_multiply(5,2));
console.log(magic_multiply(0,0));
console.log(magic_multiply([2,3,4],2));
console.log(magic_multiply("Leif", 4));
