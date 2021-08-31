// Create an application with following roles:
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep- gets access to create/delete tests
// user- gets access to consume content

var user = "admin"

switch (user) {
    case "admin":
        console.log("You get the full access");
        break; // We use break to prevent fall through
    case "subadmin":
        console.log("You get the access to create/delete courses");
        break;
    case "testprep":
        console.log("You get the access to create/delete tests");
        break;
    case "user":
        console.log("You get the access to consume content");
        break;
    default:
        console.log("Trial user")
        break;

}