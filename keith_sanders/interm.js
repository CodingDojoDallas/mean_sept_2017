function starString(n){
  var star = '';
  for( var i = 0; i < n ; i++){
    star += '*';
  }
  return star;
}
 console.log(starString(20));

function drawStars(arr) {
  var new_star = arr.length;
  for( var i = 0; i < new_star; i++){
    console.log(starString(arr[i]));
  }
}

drawStars([1,24,5,30,9,100])

function makeStars(arr){
  let new_nova = [];
  for(let i = 0; i < arr.length; i++ ){
    if(typeof arr[i] === 'number'){
      new_nova.push(starString(arr[i]))
    }else if(typeof arr[i] === 'string'){
      let new_constellation = '';
      for(let k = 0; k < arr[i].length; k++){
        new_constellation += arr[i][0].toLowerCase();
      }
      new_nova.push(new_constellation);
    }
  }
  return new_nova
}

let q = [1,'Tom',8,'Jim',9,12,'lucie'];
console.log(makeStars(q));
