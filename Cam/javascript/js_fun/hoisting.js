1 
 
console.log(hello);
var hello = 'world';

// => "world"

2 

var needle = 'haystack';
test();


function test(){
	var needle = 'magnet';
	console.log(needle);
}

//=> hoisted function with output of "magnet"

3

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// => console with be logged with "brendan"


4 


var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = ‘gone’;
}

// => logged "chicken", ear no method defined for eat. break 

5



mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// =>it will break no ReferenceError: mean is not defined, then log "food", hoist foot variable, log "fish"

6



console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

// => log "disco", error ReferenceError: rewind is not defined, replace/log "rock", replace/log "r&b", log "r&b"

7


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);


// => log "san jose", error ReferenceError: learn is not defined, replace/log "seattle", replace/log "burbank", log "san jose"