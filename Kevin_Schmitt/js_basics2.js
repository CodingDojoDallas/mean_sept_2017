function magic_multiply(x,y){



    if(x.constructor === Array){
        for(var i = 0; i<x.length;i++){
            x[i] *= y;
        }

        return x;
    }
    else if(typeof x === 'number'){
        x*=y
        return x;
    }
    else if(typeof x === 'string' && y > 1){
        // var n = 'x'*y
        return x + magic_multiply(x,y-1);
    }
    else{
        return x
    }
}
let test1 = magic_multiply(5, 2);
console.log(test1);
let test2 = magic_multiply(0, 0);
console.log(test2);
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
let test4 = magic_multiply(7, "three");
console.log(test4);
let test5 = magic_multiply("Brendo", 4);
console.log(test5);