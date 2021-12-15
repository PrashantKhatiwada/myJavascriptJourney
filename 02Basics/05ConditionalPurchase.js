// User is only allowed to purchase if he is:
// Logged in
// email verified
// cardInfo- valid
// If any one is missing, stop purchase

var isLoggedIn = true;
var emailVerified = true;
var cardInfo = true;

// if (isLoggedIn) {
//     console.log("Logged in Success");

//     if (emailVerified) {
//         console.log("Email is verified");
//         if (cardInfo) {
//             console.log("You can make a purchase")
//         }
//     }
// }

// the code is not going to execute even if one of the conditions is false
if (isLoggedIn && emailVerified && cardInfo){
    console.log("You can make the purchase")
} else{
    console.log("You are not allowed to make the purchase")
}