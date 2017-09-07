//ES6
class Person {
	constructor(name, age, fav_color){
		this._name = name;
		this._age = age;
		this._favColor = fav_color
	}

	sayMyName(){
		console.log(this.name)
	}

	get name(){
		return this._name
	}

	set name(name){
		this._name = name
	}

}

class Superhero extends Person {
	constructor(name, age, fav_color, super_power, hero_name){
		super(name, age, fav_color);
		this.superPower = super_power;
		this.heroName = hero_name;
	}
	sayMyName(){
		super.sayMyName()
		console.log('now i am back in the hero class')
	}
}




// var person = new Person('Cody', 29, 'green');
// var superHero = new Superhero('Cody', 29, 'green', 'flight', 'Codysseus')
// console.log(superHero.sayMyName());


//es6
class People {
    constructor(name) {
        var _name = name;
        this.name = name;
        this.setName = function(name) { _name = name; }
        this.getName = function() { return _name; }
        console.log(this);
    }
    getName2(){
    	console.log(_name);
    }
}

var x = new People('Cody');
console.log(x.name);

// function People(name){
// 	var _name = name;

// 	this.getName = function(){
// 		console.log(_name);
// 	}

// }







