/*  jsbasics1.js
    leif anderson 9/5/17
*/

// basic 1
var x = [];
x.push("Ninja");
x.push("Leif");
x.push("Rocks");
x.pop();
// x = ["Ninja", "Leif"]
console.log(x);

// basic 2
const y = [];
y.push(88);
console.log(y);
// 88 was pushed into the array ....
// not what I expected

// basic 3
var z = [9, 10, 6, 5, -1, 20, 13, 2];
// print all ... did not like block scoping with let at this level
for (var i=0; i < z.length; i++) console.log(z[i]);
// print all but last
for (var i=0; i < z.length-1; i++) console.log(z[i]);

// basic 4
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for (var i=0; i < names.length; i++) console.log(names[i]);
for (var i=0; i < names.length; i++) {
  if (names[i].length > 4) console.log(names[i]);
}

// basic 5
function yell(a_string) {
  return a_string.toUpperCase();
}
console.log(yell('hello'));
