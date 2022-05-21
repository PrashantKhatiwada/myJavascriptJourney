// const user = ["Prashant",4,"Admin"]
// // // console.log(user[1])
// // // var role = user[2];
// // console.name = user[0];
// var [name, courseCount, role]= user;
// console.log(role);
const myUser = {
    userName : "Prashant",
    courseCount : 3,
    role : "Admin"

}
console.log(myUser.courseCount) 

const{userName,courseCount,role}=myUser;
console.log(courseCount);