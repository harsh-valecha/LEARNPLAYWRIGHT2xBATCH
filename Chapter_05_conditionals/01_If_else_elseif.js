let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("you are admin");
    }
    else if (userRole === "editor") {
        console.log("you are editor");
    }
    else if (userRole === "viewer") {
        console.log("you are viewer");
    }
    else {
        console.log("Dont know who you are");
    }

}
else {
    console.log("Not logged in");
}
