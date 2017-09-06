function Ninja(name){
  this.name = name;
  this.health = 100;
  var speed = 3;
  var strength = 3;

  this.showStats = function(){
    console.log("Name:" + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    return this;
  }
}

Ninja.prototype.sayName = function () {
  console.log("My name is " + this.name );
  return this;
};

Ninja.prototype.drinkSake = function () {
  console.log("Health:" + (this.health += 10));
  return this;

};

Ninja.prototype.punch = function (ninja) {
  ninja instanceof Ninja;
  console.log(ninja.name + "was punched by" + this.name + "and lost" + (ninja.health -= 5) + "Health!" );
};

Ninja.prototype.kick = function (ninja) {
  ninja instanceof Ninja;
  console.log( ninja.name + "was kicked by " + this.name + "and lost" + (ninja.health -= 15) + "Health!");

};

var ninja1 = new Ninja("Sasuke");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

var blue_ninja = new Ninja("Neji");
var red_ninja = new Ninja("Naruto");
blue_ninja.punch(red_ninja);
red_ninja.kick(blue_ninja);
