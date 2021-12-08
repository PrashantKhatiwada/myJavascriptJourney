var user = {
    firstName : "Prashant",
    lastName : "Khatiwada",
    role : "Admin",
    loginCount : 56,
    facebookSignedIn : true
};

console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.loginCount)

user.loginCount=59;
console.log(user.loginCount);

console.log(user);
console.table(user);