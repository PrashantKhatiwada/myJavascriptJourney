// Arrays index starts from 0
var countries = ["Nepal", "Japan","America","China"];

var states = new Array("Kathmandu", "Biratnagar","Pokhara","Chitwan");

console.log(states); // logs the whole array
console.log(states[0]); // logs the very first element from the array as its index will be 0

console.log(states.length); // gives the length of the array .i.e. 4

console.log(states[states.length-1]); // gives the last element

states[0]="Damak"; // replaces the first element with Damak
console.log(states);

var user = ["Prashant","pkhatiwada58@gmail.com","Urlabari",3, true];

console.log(user);

user.pop(); // pops the last value in the array user
user.pop(); // pops the second last value in the array user .... cont....
console.log(user); // prints the array without the last two element

// user.unshift("New Value");//Add "New Value" to the first of the array
// // console.log(user);
// user.shift(); // removes the first element from the array user
// // console.log(user);

console.log(user.indexOf("Urlabari")); // if the value is -1 the element is not in the array

console.log(Array.from("Prashant")); //converts into an array, cooool!!


