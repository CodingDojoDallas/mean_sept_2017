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