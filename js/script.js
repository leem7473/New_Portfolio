$(document).ready(function () {
  // Navbar sub description hide
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $(".title_desc").addClass("hide");
    } else {
      $(".title_desc").removeClass("hide");
    }
  });

  // portfolio_title scroll height
  getScHeight = function () {
    var scHeight = $(".portfolio_title").prop("scrollHeight");
    console.log(scHeight);
  };
});
