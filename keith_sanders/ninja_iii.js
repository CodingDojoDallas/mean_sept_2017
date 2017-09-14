class Ninja {
  constructor(name, health, speed, strength){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }
  sayName(){
    console.log(`My name is ${this.name}`)
  }

  showStats(){
    console.log(`Speed: ${this.speed}, Strength: ${this.strength}, Health: ${this.health}`);
  }

  drinkSake(){
    console.log(`Health increase by ${this.health += 10}`);
  }
}

class Sensei extends Ninja {
  constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdom(wisdom){
    super.drinkSake();
    console.log(`When a ninja omit he/she knows nothing, than he/she is ready to learn everything`);
  }

  showStats(){
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
  }
}
let Shinubi = new Ninja('Minato');
Shinubi.sayName();
Shinubi.showStats();
Shinubi.drinkSake();

let Matt_sensei = new Sensei('Matt')
Matt_sensei.speakWisdom();
Matt_sensei.showStats();
