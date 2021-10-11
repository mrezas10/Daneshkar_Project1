function popUp() {
    var x = document.getElementById("login-page-container");
    if (x.className === "login-hidden") {
        x.className = " login-opened";
    } else {
        x.className = "login-hidden";
    }
}

function closePopUp() {
    var x = document.getElementById("login-page-container");
    if (x.className === "login-opened") {
        x.className = " login-hidden";
    } else {
        x.className = "login-opened";
    }
}