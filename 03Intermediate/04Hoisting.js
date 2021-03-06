// There is a global context and an execution context
// Major things in Execution COntext:
// Variable object, Scope chain, 'this' keyword
// Rules to follow when there is an execution context:
// 1. FUnction declarations are scanned and made available
// 2. Variable declarations are also scanned and made undefined

// tipper("5"); Calling the function here will also run the code well because of the global context
function tipper(a){
    var bill = parseInt(a);
    console.log(`I want to tip you a 5 dollars so the total bill will amount to ${bill + 5} $`);
}
tipper(5); // This simply tips a total of 10 dollars
tipper("5");

// bigTipper("200"); This will not run as global context reads variable as undefined in
var bigTipper = function (a){
    var bill = parseInt(a);
    console.log(`I want to tip you a 5 dollars so the total bill will amount to ${bill + 15} $`);
}
bigTipper("200");

// The whole thing above about the variablish function and the pure function is known as hoisting

console.log(name); //undefined

var name = "Prashant";

console.log(name); //Prints my name

// code hoisting makes the variable undefined when it is tried ot access first before declaring it
// but if the variable is called without declaring it anywhere on the code it gives an error and there is a huge difference in being undefined and giving an error

function sayName(){
    var name= "Raghav"
    console.log(name);
}
sayName(); // execution context cannot drill down below it