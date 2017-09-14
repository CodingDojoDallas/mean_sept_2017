
let x = [];
x.push('coding', 'dojo', 'rocks');
console.log(x);
x.pop();
console.log(x);



const y = [];
y.push(88);
console.log(y);



var z = [9,10,6,5,-1,20,13,2];
for(var i = 0; i < z.length - 1; i++ ) {
  console.log(z[i])
}

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alhonso']
for(var i in names) {
  console.log(names[i])
}
for(var i in names) {
  if(names[i].length == 5){
    console.log(names[i])
  }
}


function yell(string){
  console.log(string.toUpperCase())
}
yell('Hey there Merry @#%$ing Christmas')
