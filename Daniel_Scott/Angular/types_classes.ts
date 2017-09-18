var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1,2,3,4];
var myObjOne: { name: string} = { name:'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
var arrayOne: boolean[] = [true, false, true, true];
var arrayTwo: any[] = [1, 'abc', true, 2];
var myObjTwo: {x:number, y:number} = { x: 5, y: 10 };
// object constructor
const MyNode = (function () {
    function MyNode(val: number) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}
