function Ninja(name) {
    var self = this;
    this.name = name;
    this.health = 100;
    //private
    var speed = 3;
    var strength = 3;

    this.sayName = function() {
        console.log('My ninja name is ' + this.name +"!")
        return this
    }
    this.showStats = function() {
        console.log('Name: ' + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength)
        return this
    }
    this.drinkSake = function() {
        this.health += 10;
        return this
    }

    var getStrength = function() { //power for strength
        return strength;
    }

}
var Cam = new Ninja("Cam")
var Bob = new Ninja("Bob")
Bob.strength = 5
Cam.sayName()
Cam.showStats()
Cam.drinkSake()
Cam.drinkSake()
Bob.drinkSake()
Cam.showStats()
Bob.showStats()

