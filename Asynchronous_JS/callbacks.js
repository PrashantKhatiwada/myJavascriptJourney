// Running a function inside another function - Callback
//  Creating a relation between two functions

// Normal

function one(){
console.log("Step one");
}
function two(){
console.log("Step two");
}
one();
two();

// Callback - Function calling another function

function one(call_two) {
    call_two();
    console.log("Step one");
    call_two();

}
function two() {
    console.log("Step two");
}
one(two);




