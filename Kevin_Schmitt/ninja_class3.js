class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`Hello my name is ${this.name}`);
    }
    showStats(){
        console.log(`Name: ${this.name}, HEALTH: ${this.health}, SPEED: ${this.speed}, Strength: ${this.strength}`); 
    }
    drinkShake(){
        this.health += 10;
        return this;
    }
    // punch(x){
    //     x.health -= 5;
    // }
    // kick(x){
    //     x.health -= (15*this.strength);
    // }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkShake();
        console.log("What one programmer can do in one month, \ntwo programmers can do in two months.");
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
    }
}



let = super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom();
super_sensei.showStats();



// let ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// // -> "My ninja name is Hyabusa!"
// ninja1.showStats();
// // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
// var blue_ninja = new Ninja("Goemon");
// blue_ninja.sayName();
// blue_ninja.showStats();
// var red_ninja = new Ninja("Bill Gates");
// red_ninja.sayName();
// // red_ninja.punch(blue_ninja);
// red_ninja.drinkShake(blue_ninja);
// red_ninja.showStats();
// // -> "Goemon was punched by Bill Gates and lost 5 Health!"
// // red_ninja.kick(blue_ninja);
