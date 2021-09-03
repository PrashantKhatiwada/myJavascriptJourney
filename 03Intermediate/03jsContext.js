//The following function call runs due to the global context, global context reads the entire code
// sayHello(); // This runs

// function sayHello(){
//     console.log("Hello");
// }

if (2==="2"){
console.log("This is true");
}
//The following code will not run in the terminal because window only works as a global context in the browser and not in the node
var myName = "Prashant"
if(myName===window.myName){
    console.log("True satement");
}