////////////////////////////////
// W1D1 - JS Fundamentals
////////////////////////////////
// Q: what is the difference between let, const, and var?
// A: let is the newer version of var for newer version of javascript and is block scoped rather than var which is functionally scoped. let and cost are not hoisted
// const is used for constants,it means that the variable cannot be reassigned

// Q: what is the difference between undefined and null in javascript?
// A: undefined - a variable that has been declared but not defined will result in the value of undefined.
// Null, like undefined, checking the truthy value of null will result in false, but unlike undefined, null is an assignment value that is a representation of no value. As weird as it might sound, even though null is supposed to have no value, it's actually an object

// Q: what is the difference between ++index and index++
// A:
let index = 2;
index = index + 1;
let x = ++index;
// index and x now hold a value of 4
let y = index++
// index holds a value of 5 but y holds a value of 4


//Q: Explain to me what scope is
//A: Javascript is functionally scoped, but not block scoped 
//Example: Function scoping versus block scoping
	// a variable declared with the var keyword cannot be accessed outside of the function scope,but it can be access outside of its block scope
	function iHaveScope() {
	  var secret = 42;
	}
	secret; // ReferenceError: secret is not defined (in this scope)
	for (var i=0; i<10; i++) {
	  // block scope for the for statement
	}
	console.log(i) // => 10 

//Q: what if a function is nested within another function? is x available in the subfunction?
//A:yes x is available
function twoSum(nums, target){
    var x = 5;

    function subFunction(){
        console.log(x); //5
    }
    subFunction();

    return null;
}

//Q:What is the effect of the keyword var on scope?
//A: if you use the keyword var,the variable declaration is scoped only to that function. if you do not use keyword var it will reference the global declaration
    //Ex: not using keyword var
    var constantRate = 2;
    function theirFunctionality(parameter){
      return parameter * constantRate;
    }
    function yourFunctionality(parameter){
      constantRate = 3; // no var
      return parameter * constantRate;
    }
    theirFunctionality(10)  // returns 20 constantRate = 2
    yourFunctionality(10)   // returns 30 constantRate = 3
    theirFunctionality(10)  // returns 30 constantRate = 3

    //Ex: using keyword var
    var constantRate = 2;
    function theirFunctionality(parameter){
      return parameter * constantRate;
    }
    function yourFunctionality(parameter){
      var constantRate = 3; // w/ var
      return parameter * constantRate;
    }
    theirFunctionality(10)  // returns 20 constantRate = 2
    yourFunctionality(10)   // returns 30 constantRate = 3
    theirFunctionality(10)  // returns 20 constantRate = 2

// if you have a nested function, where the definition of the nested function is also inside the enclosing function,then you have a closure,and in that case a variable defined in the enclosing function,will also be available in the nested function
function twoSum(nums, target){
    var x = 5;
    function subFunction(){
      console.log(x);
    }
    subFunction();
    return null;
}

////////////
//HOISTING
////////////
//Q:explain hoisting
//A:-variable declarations are hoisted up(moved to the top of the scope)
//-assignments are not hoisted up
console.log(notYetDefined); // Output: undefined
var notYetDefined = 10;
//is equal to
var notYetDefined;          // Variable declaration is hoisted to the top, without the value
console.log(notYetDefined); // Console.log outputs our variable, which is undefined
notYetDefined = 10;         // The value we passed into our variable stays where it is

//Q:what about functions?are functions hoisted?
//A:yes, if they are not named
//Example1
awesome();
function awesome() {
    console.log("too good to be true");

}
//is equal to
function awesome() {     // the function floated to the top!
  console.log("too good to be true");
}
awesome();               // so now awesome is defined before we invoke it!


//Example2
var globallyScoped = 10
test();
function test(){
    globallyScoped = 30;
    console.log(globallyScoped);
    var globallyScoped;
}
console.log(globallyScoped);
//is equal to
var globallyScoped;
function test(){
    var globallyScoped;
    globallyScoped = 30;
    console.log(globallyScoped); // outputs 30
}
globallyScoped = 10;
test();
console.log(globallyScoped);    // outputs 10

//Q: What if a function is named and assigned to a variable?
//A: the variable declaration portion is hoisted but the assignment of that variable to the function (and the function definition) is not
//(this can cause problems as in below, because only the variable declaration portion is hoisted, and not the assignment portion)

varFunction();
var varFunction = function() {
  console.log("How will this get hoisted?")

}
//is equal to
var varFunction;           // the variable declaration gets hoisted to the top
varFunction();             // this tries to invoke "undefined": we get "undefined is not a function"
varFunction = function() {
  console.log("How will this get hoisted?")
}

//Q:what about const, let, and classes are they hoisted?
//A: no, const and let are not hoisted,they are not initialized until they are assigned values. classes are also not rhoisted
console.log(x);   // Reference error: x is not defined
console.log(y);   // Reference error: y is not defined
const x = 0;      // Line where our const is defined
let   y = 10;     // Line where our let is defined