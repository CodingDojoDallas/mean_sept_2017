// function starString(num){
//   var string = "";
//   for (let i = 0; i < num; i++){
//     string += "*";
//   }
// console.log(string);
// }
//
// // starString(10);
//
// function drawStars(arr){
//   var string = "";
//   var len = arr.length;
//   for (let i = 0; i < len; i++){
//     starString(arr[i]);
//   }
//   return arr;
// }

// drawStars(x);

function starLetterString(item){
  var string = "";
  if (typeof item == "string"){
    var num = item.length;
  }
  else {
    var num = item;
  }
    for (let i = 0; i < num; i++){
      if (typeof item == "number"){
        string += "*";
      }
      else {
        item = item.toLowerCase();
        string += item[0];
      }
    }
console.log(string);
}

function drawStarsAndLetters(arr){
  var string = "";
  var len = arr.length;
  for (let i = 0; i < len; i++){
    starLetterString(arr[i]);
  }
  return arr;
}

var x = [4,5,3,7,5,6,9,7];
var y = [4,"Tom",3,"Michael",6,9,"Jimmy Smith",7,2]
drawStarsAndLetters(y);
