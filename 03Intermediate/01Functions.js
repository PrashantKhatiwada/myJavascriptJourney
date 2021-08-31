// A function is a block of code that is defined separately so that it can be used again and again in a program

function sayHello(name){
    console.log("Hello Prashant");
    // console.log("Hello there,",name)
    console.log(`Hello there, ${name}. How are you?`)
}

// sayHello(); // calling a function
// sayHello("Raghav");

function namaste(){
    return "Hello in Nepal";
}

var greetings = namaste(); // Storing the value returned by function in a variable
console.log(greetings);
console.log(namaste());