function personConstructor(name, age){
    // an object literal that will be returned
    var person = {};
    // attributes of a person
    person.name = name;
    person.age = age;
    // when attached to an object or instance, functions are called 'methods'.
    // this is our first method, greet
    person.greet = function(){
        console.log("Hello my name is " + person.name + " and I am " + person.age + " years old!");
    }
    // finally, this function must return an instance
    return person;
}
// create the 'steve' instance, run greet
var steve = personConstructor("Steve", 27);
steve.greet();
// create the 'anika' instance, run greet. note that it is different.
var anika = personConstructor("Anika", 33);
anika.greet();
// finally note how we can refine the greet method for any particular instance
var emily = personConstructor("Emily", 22);
emily.greet = function(){
    console.log("I am the greatest, ever!");
};
emily.greet();




function personConstructor1(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
// the 'new' keyword causes our constructor to return the object we expected.
var anika = new personConstructor1('Anika', 33);
anika.greet();
console.log(anika);




function personConstructor2(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
var emily = new personConstructor2("Emily", 22);
// using this & new, we can now refer to the 'name' attribute of our instance!
emily.greet = function(){
    console.log("My name is " + this.name + " and I'm the coolest ever!");
    console.log(this);
}
emily.greet();



// the naming convention for Classes and Object Constructors is that they're capitalized and singular
function Person(name, age){
    var privateVariable = "This variable is private";
    var privateMethod = function(){
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
var eliza = new Person("Eliza", 48);
console.log(eliza.privateVariable);
// undefined!



function Person(name, age){
    var privateVariable = "This variable is private";
    var privateMethod = function(){
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        privateMethod();
    }
}
var joe = new Person("Joe", 23);
joe.greet();




function Person(name, age){
    // create a private variable that stores a reference to the new object we create
    var self = this;
    var privateVariable = "This variable is private";
    var privateMethod = function(){
        console.log("this is a private method for " + self.name);
        console.log(self);
    }
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        privateMethod();
    }
}
var joe = new Person("Joe", 23);
joe.greet();



var MyObjConstructor = function(name){
    var myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
    this.name = name; // but you can see the name!
    this.method = function(){
      console.log( "I am a method");
    };
  }
  var obj1 = new MyObjConstructor('object1');
  var obj2 = new MyObjConstructor('object2');
  console.log(obj1);

obj1.newProperty = "newProperty!";
obj1.__proto__.anotherProperty = "anotherProperty!";
console.log(obj1.anotherProperty); // anotherProperty!
console.log(obj1.newProperty); // newProperty!
// What about obj2?
console.log(obj2.newProperty); // undefined
console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!
