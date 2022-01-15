var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = () => {
        console.log(`Course count is: ${this.courseCount}`);
    }
}
User.prototype.getFirstName = function () {
console.log(`Your firstname is : ${this.firstName}`);
}
var prashant = new User("Prashant", 2);
prashant.getCourseCount();
console.log(prashant.firstName)
console.log(prashant);

prashant.getFirstName();