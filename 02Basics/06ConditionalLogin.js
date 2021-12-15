// Allow user to access the course if he is:
// logged in from email
// logged in from google
// logged in form facebook

 var email = false;
 var facebook = false;
 var google = false;

// Lengthy Process
// if (email){
//     console.log("Logged in success")
// }
// if (facebook){
//     console.log("Logged in success")
// }
// if (google){
//     console.log("Logged in success")
// }

// short and readable code
// user can access the courses if he is logged in through any medium
if(email || facebook || google){
    console.log("Logged in success, You can access the courses")
} else{
    console.log("Not logged in, Login to access the courses.")
}