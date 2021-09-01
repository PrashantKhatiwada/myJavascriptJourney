/*
Define a function that can answer the role of auser.
A user can be on following roles:
admin - with all acess
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role);
*/

var getUserRole= function (name, role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`
            break; // this one not needed when return
        case "subadmin":
            return `${name} is a subadmin with access to create/delete course`
            break; // this one not needed when return
        case "testprep":
            return `${name} is admin with access to create/delete tests`
            break; // this one not needed when return
        case "user":
            return `${name} is user and can consume all content`
            break; // this one not needed when return
        
        default:
            return`${name} is a trial user`;
            break; // this one not needed when return
    }
}

// var myRole = getUserRole("Prashant","user");
// console.log(myRole);

console.log(getUserRole("Prashant","admin"));