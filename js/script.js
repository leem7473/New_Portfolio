// wow.js
new WOW().init();

// easeScroll
$("html").easeScroll({
  stepSize: 30,
});

// Navbar sub description hide
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $(".title_desc").addClass("hide");
    } else {
      $(".title_desc").removeClass("hide");
    }
  });

  $(".portfolio_image_area").click(function () {
    $(".portfolio_sub_page").addClass("page_up");
  });
});
