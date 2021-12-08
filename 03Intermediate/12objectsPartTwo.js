var user = {
    firstName : "Prashant",
    lastName : "Khatiwada",
    role : "Admin",
    loginCount : 56,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName){
    this.courseList.push(courseName);
    },
    getCourseCount : function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
   info: function(){
       return console.table(user);
   }
};
console.log(user.getCourseCount());

console.log(user.firstName);
user.buyCourse("React JS Course");
console.log(user.getCourseCount());
console.log(user.info());