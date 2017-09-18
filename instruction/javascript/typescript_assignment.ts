// myNum = 5;
// myString = "Hello Universe";
// myArr = [1,2,3,4];
// myObj = { name:'Bill'};
// anythingVariable = "Hey";
// anythingVariable = 25; 
// arrayOne = [true, false, true, true]; 
// arrayTwo = [1, 'abc', true, 2];
// myObj = { x: 5, y: 10 };

let myNum:number = 5;
let myString:string = 'Hello Universe';
let myArr:number[] = [1,2,3,4];
let myObj:object = {};
let arrayTwo:any[] = [1, 'abc', true, 2, {}]
let anyVar:any = 4
anyVar = true
anyVar = 'hello'

class MyNode {
    value:number;
    left:object;
    right:object;
    _priv:number;
    constructor(value:number){
        this.value = value;
        this.left = null;
        this.right = null;
    }
    doSomething(){
        this._priv = 10;
    }
}

let myNodeInstance:MyNode = new MyNode(10);

function myFunction():void {
    console.log('hello world');
}

function sendingErrors():never {
	throw new Error('Error message');
}


