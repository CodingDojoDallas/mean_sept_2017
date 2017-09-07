class Ninja {
  constructor(name, health=100, speed=3, strength=3){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;//this is a private arrtibute
    var self = this;//this is a private attribute
    }
    sayName(){
      console.log(this.name);
    }
    showStats(){
      console.log(`Strength:  ${this.strength}`);
      console.log(`Speed:  ${this.speed}`);
      console.log(`Health:  ${this.health}`);
    }
    drinkSake(){
      this.health += 10;
      console.log(`Health:  ${this.health}`);
    }
    punch(ninja){
      if (ninja instanceof Ninja){
      ninja.health -= 5;
      }
    }
    kick(ninja){
      if (ninja instanceof Ninja){
      ninja.health -= 15;
      }
  }
}

var m = new Ninja("Michelangelo");
m.showStats();
m.drinkSake();
m.sayName();

class Sensei extends Ninja{
  constructor(name, health=200, speed=10, strength=10){
    super(name, health, speed, strength);
    this.wisdom = 10;
  }
  speakWisdom(){
    this.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.");
  }

}

var s = new Sensei("Sensee");
s.sayName();
s.showStats();
s.speakWisdom();
