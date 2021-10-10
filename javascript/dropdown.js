function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "top-navigation-bar") {
        x.className += " opened";
    } else {
        x.className = "top-navigation-bar";
    }
}