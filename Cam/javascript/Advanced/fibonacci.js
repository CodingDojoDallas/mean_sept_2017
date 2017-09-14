function fib() {
    var x = 0;
    var y = 1;

    function nacci() {
        console.log(y)
        var temp = y
        y = x + y
        x = temp



    }
    return nacci
}
var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();