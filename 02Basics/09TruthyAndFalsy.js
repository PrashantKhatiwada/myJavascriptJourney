// The follwing values are treated as falsy values
// undefined
// null
// 0
// ''
// NaN

var user=null; // null is treated as false
if (user){
    console.log("Condition is true")
}

// Anything apart from the above mentioned values are treated as truthy values

console.log(2+2); // sums up the value as both are numbers

console.log("2"+2); // prints 22 as a string and a number can't be added

console.log("2"+"2"); // concatinates the string values and print 22

var number = "2";
 
// Coercion

if (number == 2){
    console.log("Code executed") // gets executed
}
if (number === 2){
    console.log("Code executed") //doesn't get executed as === also checks datatype
}
if (number === "2"){
    console.log("Code executed") // gets executed
}