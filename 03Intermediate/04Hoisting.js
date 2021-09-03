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