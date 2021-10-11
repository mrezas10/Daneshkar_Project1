let parallax = document.getElementById("parallax")
parallax.onscroll = function () {
    let top = document.getElementById("scroll-header")
    let top2 = document.getElementById("scroll-scarf")
    let top3 = document.getElementById("transparent-header")
    if(parallax.scrollTop >= 950) {
        top.className = "scroll-visible";
        top2.className = "scroll-scarf-visible";
    }
    else {
        top.className = "scroll-hidden";
        top2.className = "scroll-scarf-hidden";
    }
    if (parallax.scrollTop <= 250)
    {
        top3.className = "transparent-visible";
    }
    else {
        top3.className = "transparent-hidden";
    }
}
function dropDownHeader() {
    let x = document.getElementById("top-nav-menu");
    if (x.className === "top-nav") {
        x.className += " opened";
    } else {
        x.className = "top-nav";
    }
}