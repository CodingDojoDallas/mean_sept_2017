//a callback is a function definition passed into a function as an argument

function test(callback){
	console.log('querying the database server')
	console.log('waiting for the request to resolve.....')
	console.log('getting users from database...')
	let users = [
		{ name: 'Cody' },
		{ name: 'Bob' },
		{ name: 'Carl' },
	]
	callback(users);
}

//a premade function definition
function myCallback(){
	console.log('I am inside the callback function!!')
	// return 'hey there!!'
}

function callbackWithData(users){
	for(let user of users){
		console.log(user.name);
	}
}

test(callbackWithData);

//anonymous function

test(function(users){
	for(let user of users){
		console.log(user.name);
	}
})

//promises
function resolution(data){
	console.log(data);
}

var rejection = function(err){
	console.log(err)
}
var myObj = {
	myFunc: function(){},

}

let promise = new Promise(function(resolve, reject){ //resolve and reject are callbacks!!!
	//making the AJAX request
	let status = false;
	if(status){
		resolve('successful AJAX request!!!!')
	} else {
		reject(Error('Something went horribly wrong!!'))
	}
})

// promise.then(resolution, rejection)

let arrow_promise = new Promise((resolve, reject) => {
	let status = false;
	if(status){
		resolve('successful AJAX request!!!!');
	} else {
		reject('Something went horribly wrong!!');
	}
})

// arrow_promise.then((resolve) => {
// 	console.log(resolve)
// }, (reject) => {
// 	console.log(reject)
// })

// arrow_promise.then(data => console.log(data), err =>  console.log(err))


function iterateArray(cody){
	for(let elem of cody){
		console.log(elem)
	}
}

//two use cases for arrow functions
//replacing anonymous functions
//preserving the value of this






