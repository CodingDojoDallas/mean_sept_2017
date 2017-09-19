let myNum: number = 5;
let myString: string = "Hello Universe";
let myArr: number[] = [1,2,3,4];
let myObj: {name: string; } = { name:'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
var arrayOne: boolean[] = [true, false, true, true];
var arrayTwo: any[] = [1, 'abc', true, 2];
let myObj = { x: 5, y: 10 };
// object constructor
class MyNode {
    val: number;

    constructor(value: number) {
        this.val = value;
    }
    doSomething() {
        this._priv = 10;
    };
};

let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction(): void{
    console.log("Hello World");
    return;
}
function sendingErrors(): never{
	throw new Error('Error message');
}
