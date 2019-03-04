$(document).ready(function() {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse")
      .addClass("hide")
      .removeClass("show");
  });
});

// $(".fc-film")
//   .children()[0]
//   .addClass("hello");

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

// Dynamic Contact Form Events Below
$("#nameFormspree").keyup(function() {
  if (
    $("#nameFormspree")
      .val()
      .trim() !== ""
  ) {
    $("#nameFormspree").css("border-bottom", "solid lightgreen 2px");
  } else {
    $("#nameFormspree").css("border-bottom", "solid rgb(220, 52, 85) 2px");
  }
});

$("#emailFormspree").keyup(function() {
  if (
    $("#emailFormspree")
      .val()
      .trim() !== "" &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      $("#emailFormspree")
        .val()
        .trim()
    )
  ) {
    $("#emailFormspree").css("border-bottom", "solid lightgreen 2px");
    $("#emailLabel").remove();
    $("#formatEmailMargin").css("margin-bottom", "20px");
  } else {
    $("#emailFormspree").css("border-bottom", "solid rgb(220, 52, 85) 2px");
  }
});

$("#subjectFormspree").keyup(function() {
  if (
    $("#subjectFormspree")
      .val()
      .trim() !== ""
  ) {
    $("#subjectFormspree").css("border-bottom", "solid lightgreen 2px");
  } else {
    $("#subjectFormspree").css("border-bottom", "solid rgb(220, 52, 85) 2px");
  }
});

$("#textFormspree").keyup(function() {
  if (
    $("#textFormspree")
      .val()
      .trim() !== ""
  ) {
    $("#textFormspree").css("border-bottom", "solid lightgreen 2px");
  } else {
    $("#textFormspree").css("border-bottom", "solid rgb(220, 52, 85) 2px");
  }
});

$("#nameFormspree").keydown(function() {
  if (
    $("#nameFormspree")
      .val()
      .trim() !== ""
  ) {
    $("#nameFormspree").css("border-bottom", "solid lightgreen 2px");
  } else {
    $("#nameFormspree").css("border-bottom", "solid rgb(220, 52, 85) 2px");
  }
});

$("#emailFormspree").keydown(function() {
  if (
    $("#emailFormspree")
      .val()
      .trim() !== "" &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      $("#emailFormspree")
        .val()
        .trim()
    )
  ) {
    $("#emailFormspree").css("border-bottom", "solid lightgreen 2px");
    $("#emailLabel").remove();
    $("#formatEmailMargin").css("margin-bottom", "20px");
  } else {
    $("#emailFormspree").css("border-bottom", "solid rgb(220, 52, 85) 2px");
  }
});

$("#subjectFormspree").keydown(function() {
  if (
    $("#subjectFormspree")
      .val()
      .trim() !== ""
  ) {
    $("#subjectFormspree").css("border-bottom", "solid lightgreen 2px");
  } else {
    $("#subjectFormspree").css("border-bottom", "solid rgb(220, 52, 85) 2px");
  }
});

$("#textFormspree").keydown(function() {
  if (
    $("#textFormspree")
      .val()
      .trim() !== ""
  ) {
    $("#textFormspree").css("border-bottom", "solid lightgreen 2px");
  } else {
    $("#textFormspree").css("border-bottom", "solid rgb(220, 52, 85) 2px");
  }
});

$("#nameFormspree").keypress(function() {
  if (
    $("#nameFormspree")
      .val()
      .trim() !== ""
  ) {
    $("#nameFormspree").css("border-bottom", "solid lightgreen 2px");
  } else {
    $("#nameFormspree").css("border-bottom", "solid rgb(220, 52, 85) 2px");
  }
});

$("#emailFormspree").keypress(function() {
  if (
    $("#emailFormspree")
      .val()
      .trim() !== "" &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      $("#emailFormspree")
        .val()
        .trim()
    )
  ) {
    $("#emailFormspree").css("border-bottom", "solid lightgreen 2px");
    $("#emailLabel").remove();
    $("#formatEmailMargin").css("margin-bottom", "20px");
  } else {
    $("#emailFormspree").css("border-bottom", "solid rgb(220, 52, 85) 2px");
  }
});

$("#subjectFormspree").keypress(function() {
  if (
    $("#subjectFormspree")
      .val()
      .trim() !== ""
  ) {
    $("#subjectFormspree").css("border-bottom", "solid lightgreen 2px");
  } else {
    $("#subjectFormspree").css("border-bottom", "solid rgb(220, 52, 85) 2px");
  }
});

$("#textFormspree").keypress(function() {
  if (
    $("#textFormspree")
      .val()
      .trim() !== ""
  ) {
    $("#textFormspree").css("border-bottom", "solid lightgreen 2px");
  } else {
    $("#textFormspree").css("border-bottom", "solid rgb(220, 52, 85) 2px");
  }
});

$("#submitFormspree").on("click", function() {
  if (
    $("#emailFormspree")
      .val()
      .trim() !== "" &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      $("#emailFormspree")
        .val()
        .trim()
    )
  ) {
    $("#emailFormspree").css("border-bottom", "solid lightgreen 2px");
    $("#formatEmailMargin").css("margin-bottom", "20px");
  } else {
    $("#emailFormspree").val("");
    $("#emailFormspree").css("border-bottom", "solid rgb(220, 52, 85) 2px");
    $("#emailLabel").remove();
    $(".emailDiv").append(
      $("<label>")
        .css({
          "margin-bottom": "8px",
          color: "rgb(220, 52, 85)",
          "font-size": "12px"
        })
        .attr({
          for: "emailFormspree",
          id: "emailLabel"
        })
        .text("Please enter a valid email.")
    );
    $("#formatEmailMargin").css("margin-bottom", "0");
  }
});

$(document).ready(function() {
  $("#nameFormspree").val("");
  $("#emailFormspree").val("");
  $("#subjectFormspree").val("");
  $("#textFormspree").val("");
});

// $("#formatEmailMargin").css("margin-bottom", "20px");
// $("#formatEmailMargin").css("margin-bottom", "0");
