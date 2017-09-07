class Dot {
    constructor(x, y){
        this.x = x;
        this.y = y;
        console.log("You created a Dot!");
    }
}
let dot1 = new Dot(10, 10);


// Old ES5 way
var Dot = function Dot(x, y){
    this.x = x;
    this.y = y;
}
Dot.prototype.showLocation(){
    console.log("This Dot is at x " + this.x + " and y " + this.y);
}
var dot1 = new Dot(55, 20);
dot1.showLocation();

// New ES6 way
class Dot {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    showLocation(){
        // ES6 String Interpolation!
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
}
let dot2 = new Dot(5, 13);
dot2.showLocation();



class Dot {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    // prototype method
    showLocation(){
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
    // static method
    static getHelp(){
        console.log("This is a Dot class, for created Dots! A Dot takes x and y coordinates, type 'new Dot' to create one!");
    }
} 
let dot3 = new Dot(4, 2);
// we can see showLocation from our instance...
console.log(dot3.showLocation);
// but we can't see getHelp
console.log(getHelp);
// however we can call getHelp this way:
Dot.getHelp()




// parent Dot class
class Dot {
    constructor(x, y){
         this.x = x;
         this.y = y;
     }
     showLocation(){
         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
     }
 }
 // child Circle class
 class Circle extends Dot {
     constructor(x, y, radius){
         super(x, y);
         this.radius = radius
     }
 }
 // we can now create Circles
 let circle1 = new Circle(33, 33, 33);
 // same attributes as a Dot, plus a radius
 console.log(circle1);
 // and Circles can access Dot methods
 circle1.showLocation();
 


 // parent Dot class
class Dot {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    showLocation(){
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
}
// child Circle class
class Circle extends Dot {
    constructor(x, y, radius){
        super(x, y);
        this.radius = radius
    }
    showLocation(){
        console.log(`This Circle is at x ${this.x} and y ${this.y}`);
    }
}



// parent Dot class
class Dot {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    showLocation(){
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }
}
// child Circle class
class Circle extends Dot {
    constructor(x, y, radius){
        super(x, y);
        this.radius = radius
    }
    showLocation(){
        console.log(`This Circle is at x ${this.x} and y ${this.y}`);
    }
    // simple function in the child class
    childFunction(){
        // by using super, we can call the parent method
        let message = super.parentFunction();
        console.log(message);
    }
}
let cerk = new Circle(1, 2, 3);
cerk.childFunction();



class Pizza {
    constructor(radius, slices){
        this.radius = radius;
        this._slices = slices;
    }
    get slices (){ 
        return this._slices; 
    }
    set slices (slices){ 
        this._slices = slices;
    }
};



class Circle{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2;
    }
}
let circle1 = new Circle(1, 2, 5);
console.log(circle1.diameter);
