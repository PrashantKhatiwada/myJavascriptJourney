var myname = "Prashant"
console.log("Line number 2",myname)

function sayName(){
    // var myname="Mr.P"
    console.log("Line number 5",myname);
    saynameTwo();
    function saynameTwo(){
        // var myname="Mr K."
        console.log("Line number 10", myname); //This takes the name from above but not from below even if there is any
    }
}
sayName();