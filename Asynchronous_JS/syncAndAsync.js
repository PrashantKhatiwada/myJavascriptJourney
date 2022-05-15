// Divinding a project into smaller ones - Asyncronous
// In asynchronous, every function has their own independent existence, and one does not affect another

// Synchronous

console.log(" I ");

console.log(" love ");

console.log(" eating ");

console.log(" icecreams ");

// Asynchronous

console.log(" I ");

// This timeout create a whole different path for this block of code, It runs independently and not in the order. This is an example of Asynchronous function
setTimeout(()=>{

console.log(" love ");

},4000)

console.log(" eating ");

console.log(" icecreams ");

