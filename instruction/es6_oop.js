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




var person = new Person('Cody', 29, 'green');
var superHero = new Superhero('Cody', 29, 'green', 'flight', 'Codysseus')
console.log(superHero.sayMyName());








