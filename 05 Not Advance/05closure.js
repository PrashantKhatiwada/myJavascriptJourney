// function intit(){
//     var firstName= "Prashant";
//     console.log("I am init")
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     return sayFirstName;
// }
// var value = intit();

// value();


function addThisUp(x){
    return function(y){
        return x+y;
    }
    
}
var add= addThisUp(4);
console.log(add(3));
console.log(addThisUp(7)(9));