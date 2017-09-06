function Ninja(name){
    var self = this
    this.name = name;
    this.health = 100;
    var privateSpeed = 3;
    var privateStrength = 3;
    var privateMethod = function(){
        console.log(self.name + ' is a Ninja!');
        console.log(self);
    }
    this.sayName = function(){
        console.log("Hello my name is " + this.name);
        privateMethod();
    }

    this.showStats = function(){
        console.log('Name: ' + this.name + ", HEALTH: " + this.health + ', SPEED: ' + privateSpeed + ', STRENGTH: ' + privateStrength);
        // console.log("My SPEED is " + privateSpeed);
        // console.log("My STRENGTH is " + privateStrength);
    }
    this.drinkShake = function(){
        this.health += 10;
    }
    this.punch = function(x){
        x.health -= 5;
    }
    this.kick = function(x){
        x.health -= (15*privateStrength);
    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
var blue_ninja = new Ninja("Goemon");
blue_ninja.sayName();
var red_ninja = new Ninja("Bill Gates");
red_ninja.punch(blue_ninja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
red_ninja.kick(blue_ninja);
blue_ninja.showStats();




