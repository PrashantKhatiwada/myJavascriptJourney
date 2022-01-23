function intit(){
    var firstName= "Prashant";
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName();
}
intit();
console.log(this.firstName);