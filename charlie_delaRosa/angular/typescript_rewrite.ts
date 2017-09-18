var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr:number[] = [1,2,3,4];
var myObj:object = {name:'Bill'};
var anythingVariable:any = "Hey";
var anythingVariable: any = 25; 
var arrayOne:boolean[] = [true, false, true, true]; 
var arrayTwo:any[] = [1, 'abc', true, 2];
var myObj:object = {
    x: 5,
    y: 10};

// // object constructor-JavaScript example
// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());

class MyNode{
    value:number;
    left:object;
    right:object;
    _priv:number;

    //constructor
    constructor(value:number){
        this.value = value;
        this.left = null;
        this.right = null;
    }
    doSomething(){
        this._priv = 10;
    }
}

//Instance JavaScript Example
// myNodeInstance = new MyNode(1);
// console.log(myNodeInstance.val);
// function myFunction() {
//     console.log("Hello World");
//     return;
// }
// function sendingErrors() {
//     throw new Error('Error message');
// }

let myNodeInstance:MyNode = new MyNode(10);

function myFunction():void {
    console.log("Hello World");
    return;
}

function sendingErrors():never {
    throw new Error('Error message');
}