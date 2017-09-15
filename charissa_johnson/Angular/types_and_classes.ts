var myNum = 5;
var myString = "Hello Universe";
var myArr = [1,2,3,4];
var myObj = { name:'Bill'};
var anythingVariable = "Hey";
var anything: any = 25; 
var arrayOne = [true, false, true, true]; 
var arrayTwo = [1, 'abc', true, 2];
var myNumObj = { 
	x: 5, 
	y: 10 };

// object constructor
class MyNode {
    node: number;
    constructor(myNode: number) {
        this.node = myNode;
    }
    myNode(val: number) {
        val = 0;
        val = val;
    }
}

let node = new MyNode(1);
console.log(node);

function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}
