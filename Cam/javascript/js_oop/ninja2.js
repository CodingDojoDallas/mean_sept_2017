
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
    this.punch = function(ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 5
            return this
        }
    }

    var getStrength = function() { //power for strength
        return strength;
    }
    this.kick = function(ninja) {
        if (ninja instanceof Ninja) { 
            strength = getStrength() //this is Cam's strength
            ninja.health -= (5 * strength) //Bob's strength goes down by 5 x Cam's strength of 3
            console.log("Bob is crying like a little girl.")
        }
    }



}
var Cam = new Ninja("Cam")
var Bob = new Ninja("Bob")
Bob.strength = 5
Cam.sayName()
Cam.showStats()
Cam.drinkSake()
Cam.showStats()
Cam.punch(Bob)
Cam.punch(Bob)
Bob.showStats()
Cam.kick(Bob)
Bob.showStats()
Cam.kick(Bob)
console.log("Bob is useless")
Bob.showStats()
Cam.kick(Bob)
Bob.showStats()
Cam.punch(Bob)
Cam.punch(Bob)
console.log("Bob gives up and and runs home")
