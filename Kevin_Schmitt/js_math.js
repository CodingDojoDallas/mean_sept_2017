function zero_negativity(arr){
    var i = 0
    while(i<arr.length){
        if(arr[i] < 0){
            return false;
        }
        else{
            i += 1;
        }
        
    }        
    return true;
}
let test1 = zero_negativity([1,2,6,4,-2,5,7]);
console.log(test1);
let test2 = zero_negativity([1,2,6,4,3,5,7]);
console.log(test2);



function is_even(x){
    if(x % 2 == 1){
        return false;
    }
    else if(x % 2 == 0){
        return true;
    }
}
let test3 = is_even(1902);
console.log(test3);
let test4 = is_even(101);
console.log(test4);



function how_many_even(arr){
    var i = 0
    var count = 0
    while(i<arr.length){
        if(arr[i] % 2 == 0){
            count += 1;
            i += 1;
        }
        else{
            i += 1;
        }
    }
    return count;
}
let test5 = how_many_even([1,2,3,4,5,6,7,8,9,10]);
console.log(test5);
let test6 = how_many_even([1,21,53,64,23,1,52]);
console.log(test6);


function create_dummy_array(n){
    var arr = []
    var i = 1
    while(i<=n){
        arr.push(Math.floor(Math.random() * 10));
        i += 1;
    }
    return arr;
}
let test7 = create_dummy_array(5);
console.log(test7);
let test8 = create_dummy_array(8);
console.log(test8);


function random_choice(arr){
    var length = arr.length;
    var num = Math.floor(Math.random() * (length+1));
    return arr[num]
}
let test9 = random_choice([1,21,53,64,23,6,52]);
console.log(test9);
let test10 = random_choice([45,26,84,26,99,131,468,3,53,1,34]);
console.log(test10);