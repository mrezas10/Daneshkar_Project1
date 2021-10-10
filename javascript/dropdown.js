function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "top-nav") {
        x.className += " opened";
    } else {
        x.className = "top-nav";
    }
}