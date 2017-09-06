// function starString(x){
//     var y = '';
//     var i = 1;
//     while(i<=x){
//         y += '*'
//         i += 1;
//     }
//     return y
// }
// let stars = starString(14);
// console.log(stars);

let create = [1,8,2,'tim',3,6,'john smith',2,2,11,'Michael Jordan']

function draw_stars(arr){
    var i = 0;    
    while(i<arr.length){
        if(typeof arr[i] === 'number'){
            var j = 1;
            var y = '';        
            while(j<=arr[i]){
                y += '*';
                j+=1;
            }
        console.log(y)
        i++;
        }
        else if(typeof arr[i] === 'string'){
            var j = 1;
            var y = '';
            while(j<arr[i].length){
                y += arr[i].charAt(0);
                j+=1;
            }
        console.log(y.toLowerCase())
        i++;
        }
    }
    return arr
}

draw_stars(create)


