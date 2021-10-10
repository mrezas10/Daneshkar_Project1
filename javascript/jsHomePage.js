// $(document).scroll(function () {
//     //Show element after user scrolls 800px
//     var y = $(this).scrollTop();
//     if (y > 800) {
//         $('.bottomMenu').fadeIn();
//     } else {
//         $('.bottomMenu').fadeOut();
//     }
//
//     // Show element after user scrolls past
//     // the top edge of its parent
//     $('h1').each(function () {
//         var t = $(this).parent().offset().top;
//         if (y > t) {
//             $(this).fadeIn();
//         } else {
//             $(this).fadeOut();
//         }
//     });
// });

// window.onscroll = function() {myFunction()};
//
// function myFunction() {
//     if (window.scrollY > 1500 || document.documentElement.scrollTop > 500) {
//         document.getElementById("mySpan").className = "test";
//     } else {
//         document.getElementById("mySpan").className = "";
//     }
// }

window.onscroll = function () {
    let top = document.getElementById("mySpan")
    if(window.scrollY >= 500) {
        top.className = "test2";
    }
    else {
        top.className = "test";
    }
}