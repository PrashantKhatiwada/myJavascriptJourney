// Show user a signout button if he is authenticated
// otherwise show him option to login/signup

var authenticated = false;

// Normal way
if(authenticated){
    console.log("Show signout button");
} else{
    console.log("Show login option")
}

// using conditional or ternary operators
// authenticated ? console.log("Show signout button"): console.log("Show login button");
