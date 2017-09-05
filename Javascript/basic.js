# Basic 1
let x = [];
x.push('coding', 'dojo', 'rocks');
console.log(x);
x.pop();
console.log(x);
# Bring back [ "coding", "dojo"]

# Basic 2
const y = [];
y.push(88);
console.log(y);
# Added 88 to the array

# Basic 3
var z = [9,10,6,5,-1,20,13,2];
for(var i = 0; i < z.length; i++) {
  console.log(z[i])
}
for(var i = 0; i < z.length - 1; i++ ) {
  console.log(z[i])
}
# print out everything in the array and the one without the final number.

# Basic 4
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alhonso']
for(var i in names) {
  console.log(names[i])
}
for(var i in names) {
  if(names[i].length == 5){
    console.log(names[i])
  }
}

# Basic 5
function yell(string){
  console.log(string.toUpperCase())
}
yell('Hey there Merry @#%$ing Christmas')
#many places github if u know where to look or w3schools.com
