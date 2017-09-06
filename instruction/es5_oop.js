//es5
//this == self
function Person(name, color){
	//attribrutes
	const self = this;
	name = name;
	self.age = 29;
	self.profession = 'Instructor';
	//private variable
	//private variables values are shared amongst all instances
	self.favColor = color;
	//functions
	//only use these functions if they need to access a private var
	self.sayMyName = function(){
		console.log('this: ', self);
		// console.log(name);
	}
	
}

//prototype functions go outside the class definition
Person.prototype.sayMyAge = function(){
	console.log(this) // good scope
	var self = this;
	testingScope(function(){
		// this = 'something bad';
		console.log('this: ', self);
	})
}

Person.prototype.sayMyFavColor = function(){
	console.log(this.favColor);

}

function testingScope(callback){
	callback()
}

var person = new Person('Cody', 'green');
var person2 = new Person('Bob', 'red');
// console.log(person);
person.sayMyName();
// person.sayMyAge();
// person.sayMyFavColor();
// person2.sayMyFavColor();


// PascalCase - classes
// camelCase - functions
// snake_case - variables