/*  jsintermediate1.js
    leif anderson 9/6/17
*/

function star_string(n) {
  var str = '';
  for (var i = 0; i < n; i++) str += '*';
  return str;
}

console.log(star_string(8));

function draw_stars(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    console.log(star_string(arr[i]));
  }
}

draw_stars([1,0,5,20,3]);

function draw_stars_2(arr) {
  var arr_len = arr.length;
  for (var i = 0; i < arr_len; i++) {
    if (typeof(arr[i]) == 'number') {
      console.log(star_string(arr[i]));
    }
    else if (typeof(arr[i]) == 'string') {
      var ch = arr[i][0].toLowerCase();
      var str_len = arr[i].length;
      var str = '';
      for (var j = 0; j < str_len; j++) {
        str += ch;
      }
      console.log(str);
    }
  }
}

draw_stars_2([0,5,"Leif",5,"Caleb",10,"Blaze Amaze"]);
