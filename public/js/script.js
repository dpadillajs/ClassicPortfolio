$(document).ready(function() {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse")
      .addClass("hide")
      .removeClass("show");
  });
});

$(".host-element").frameCarousel();

$(".skillbar").each(function() {
  $(this)
    .find(".skillbar-bar")
    .css("width", "26");
});

$("#clientSide").click(function() {
  $(".skillbar").each(function() {
    $(this)
      .find(".skillbar-bar")
      .animate(
        {
          width: $(this).attr("data-percent")
        },
        2000
      );
  });
});

$(".skillbar2").each(function() {
  $(this)
    .find(".skillbar-bar")
    .css("width", "26");
});

$("#serverSide").click(function() {
  $(".skillbar2").each(function() {
    $(this)
      .find(".skillbar-bar")
      .animate(
        {
          width: $(this).attr("data-percent")
        },
        2000
      );
  });
});
