class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }
    showStats() {
        console.log(`${this.name}'s'stats: Health = ${this.health}, Strength = ${this.strength}, Speed = ${this.speed}`);
        return this;
    }
    drinkSake() {
        this.health += 10
        console.log(`${this.name} drinks a Sake`);
        return this;
    }
    punch(ninja) {
        ninja.health -=5;
        console.log(`${this.name} throw's a punch`)
        return this; 
    }

}
let Cam = new Ninja("Cam");
Cam.sayName();
Cam.showStats();
Cam.drinkSake();
Cam.showStats();

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;

    }
    speakWisdom() {
        super.drinkSake();
        console.log(`${this.name} speaks wisdom: "Dont eat yellow snow!"`);
    }
    showStats() {
        super.showStats();
        console.log(`I also have a wisdom level of ${this.wisdom}`);
    }

} 
let super_sensei = new Sensei("Batman");
super_sensei.sayName();
super_sensei.showStats();
super_sensei.speakWisdom();
super_sensei.showStats();
super_sensei.punch(Cam);
Cam.showStats();