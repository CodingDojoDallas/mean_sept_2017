//Create a new class called Ninja:
function Ninja(name, health=100, speed=3, strength=3){
  var speed = speed;
  var strength = strength;//this is a private arrtibute
  var self = this;//this is a private attribute
  this.name = name;
  this.health = health;

  this.sayName = function(){
    console.log(self.name);
  }
  this.showStats = function(){
    console.log(`Strength:  ${strength}`);
    console.log(`Speed:  ${speed}`);
    console.log(`Health:  ${self.health}`);
  }
  this.drinkSake = function(){
    self.health += 10;
    console.log(`Health:  ${self.health}`);
  }
  this.punch = function(Ninja){

  }
  this.kick = function(Ninja){

  }
}

var m = new Ninja("Michelangelo");
m.sayName();
m.showStats();
m.drinkSake();
console.log(m.speed);//should return undefined because private attribute
console.log(m.health);//should return value
