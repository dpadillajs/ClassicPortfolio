$(document).ready(function() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    $(".hide-parallex").css("display", "none");
  }

  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse")
      .addClass("hide")
      .removeClass("show");
  });

  function assignProperties() {
    setTimeout(function() {
      var uniqueID = 1;
      $(".fc-film > div").each(function() {
        $(this).wrap(
          "<a href='#' target='_blank' id='projectNo" + uniqueID + "'></a>"
        );
        uniqueID++;
      });
    }, 2000);

    setTimeout(function() {
      var uniqueID = 1;
      $(".fc-pagination-inner > a").each(function() {
        $(this).attr("id", "projectNum" + uniqueID);
        uniqueID++;
      });
    }, 2000);
  }

  assignProperties();

  //Failsafe in case assignProperties() never runs
  setTimeout(function() {
    if ($("#projectNo1").length === 0) {
      assignProperties();
    }
  }, 10000);
});

$(window).on("beforeunload", function() {
  $("body").hide();
  $(window).scrollTop(0);
});

// Project URLS are ordered by their carousal appearance. //
var projectURLs = [
  "https://dpadillajs.github.io/CyberpunkHangman/",
  "https://dpadillajs.github.io/DearTrivia/",
  "https://dpadillajs.github.io/FlightTimes/",
  "https://gamelogger-app.herokuapp.com/",
  "https://dpadillajs.github.io/Giffeine/",
  "https://pokematch-app.herokuapp.com/",
  "https://cinegrub.com/",
  "https://app-schedulr.herokuapp.com/",
  "https://dpadillajs.github.io/GameOfThronesRPG/",
  "https://davidpadilla.io/"
];

setTimeout(function() {
  var projectID = 1;
  $.each(projectURLs, function(i, url) {
    $("#projectNo" + projectID).attr("href", url);
    projectID++;
  });
}, 3000);

$(".host-element").frameCarousel();

$(".skillbar").each(function() {
  $(this)
    .find(".skillbar-bar")
    .css("width", "26");
});

$("#clientSide > i").click(function() {
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

$("#serverSide > i").click(function() {
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

// Wrap every letter in a span
$(".ml3").each(function() {
  $(this).html(
    $(this)
      .text()
      .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
  );
});

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function(el, i) {
      return 150 * (i + 1);
    }
  })
  .add({
    targets: ".ml3",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

setTimeout(function() {
  if ($("#projectNum1").hasClass("active")) {
    $("#projectTitleDetails").text("");
    $("#projectTitleDetails")
      .text("Cyberpunk Hangman")
      .fadeIn(1000);

    $("#aboutProjectDetails").text("");
    $("#aboutProjectDetails")
      .text(
        "A cyberpunk themed hangman game that takes in user input, keeps track of guesses, and notifies the user of their wins/losses."
      )
      .fadeIn(1000);

    $("#dumpSkills").empty();
    $("#dumpSkills")
      .append(
        $("<span>")
          .addClass("badge badge-primary tech html")
          .text("HTML5")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech css")
          .text("CSS3")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech javascript")
          .text("JavaScript")
      )
      .fadeIn(1000);
  }
}, 2500);

setTimeout(function() {
  paginationInnerEvt();
  carouselArrowBtnEvt();
}, 3000);

setTimeout(function() {
  if ($("#projectNo1").length === 0) {
    paginationInnerEvt();
    carouselArrowBtnEvt();
  }
}, 11000);

function paginationInnerEvt() {
  $(".fc-pagination-inner > a").each(function() {
    $(this).on("click", function() {
      $("#projectTitleDetails").hide();
      $("#aboutProjectDetails").hide();
      $("#dumpSkills").hide();
      displaySkills();
    });
  });
}

function carouselArrowBtnEvt() {
  $(".fc-btn").on("click", function() {
    $("#projectTitleDetails").hide();
    $("#aboutProjectDetails").hide();
    $("#dumpSkills").hide();
    displaySkills();
  });
}

setInterval(function() {
  displaySkills();
}, 1000);

function displaySkills() {
  if ($("#projectNum1").hasClass("active")) {
    $("#projectTitleDetails").text("");
    $("#projectTitleDetails")
      .text("Cyberpunk Hangman")
      .fadeIn(1000);

    $("#aboutProjectDetails").text("");
    $("#aboutProjectDetails")
      .text(
        "A cyberpunk themed hangman game that takes in user input, keeps track of guesses, and notifies the user of their wins/losses."
      )
      .fadeIn(1000);

    $("#dumpSkills").empty();
    $("#dumpSkills")
      .append(
        $("<span>")
          .addClass("badge badge-primary tech html")
          .text("HTML5")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech css")
          .text("CSS3")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech javascript")
          .text("JavaScript")
      )
      .fadeIn(1000);
  }
  if ($("#projectNum2").hasClass("active")) {
    $("#projectTitleDetails").text("");
    $("#projectTitleDetails")
      .text("Dear Trivia")
      .fadeIn(1000);

    $("#aboutProjectDetails").text("");
    $("#aboutProjectDetails")
      .text(
        "Dear Trivia is a rom-com trivia application in which users must choose an answer from each multiple choice question before the time runs out."
      )
      .fadeIn(1000);

    $("#dumpSkills").empty();
    $("#dumpSkills")
      .append(
        $("<span>")
          .addClass("badge badge-primary tech html")
          .text("HTML5")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech css")
          .text("CSS3")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech javascript")
          .text("JavaScript")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech jquery")
          .text("jQuery")
      )
      .fadeIn(1000);
  }
  if ($("#projectNum3").hasClass("active")) {
    $("#projectTitleDetails").text("");
    $("#projectTitleDetails")
      .text("Flight Times")
      .fadeIn(1000);

    $("#aboutProjectDetails").text("");
    $("#aboutProjectDetails")
      .text(
        "Flight Times is an administrative application that utilizes Google's Firebase to store arrival and departure times at RDU Airport."
      )
      .fadeIn(1000);

    $("#dumpSkills").empty();
    $("#dumpSkills")
      .append(
        $("<span>")
          .addClass("badge badge-primary tech html")
          .text("HTML5")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech css")
          .text("CSS3")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech javascript")
          .text("JavaScript")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech jquery")
          .text("jQuery")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech bootstrap")
          .text("Bootstrap 4")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech firebase")
          .text("Firebase")
      )
      .fadeIn(1000);
  }
  if ($("#projectNum4").hasClass("active")) {
    $("#projectTitleDetails").text("");
    $("#projectTitleDetails")
      .text("Gamelogger")
      .fadeIn(1000);

    $("#aboutProjectDetails").text("");
    $("#aboutProjectDetails")
      .text(
        "Gamelogger is a full stack application that users can use to add or delete videogames from their backlog and update once completed."
      )
      .fadeIn(1000);

    $("#dumpSkills").empty();
    $("#dumpSkills")
      .append(
        $("<span>")
          .addClass("badge badge-primary tech html")
          .text("HTML5")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech css")
          .text("CSS3")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech javascript")
          .text("JavaScript")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech jquery")
          .text("jQuery")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech bootstrap")
          .text("Bootstrap 4")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech handlebars")
          .text("Handlebars")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech node")
          .text("Node.js")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech express")
          .text("Express")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech mysql")
          .text("MySQL")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech sequelize")
          .text("Sequelize")
      )
      .fadeIn(1000);
  }
  if ($("#projectNum5").hasClass("active")) {
    $("#projectTitleDetails").text("");
    $("#projectTitleDetails")
      .text("Giffeine")
      .fadeIn(1000);

    $("#aboutProjectDetails").text("");
    $("#aboutProjectDetails")
      .text(
        "Giffeine is a coffee-themed gif central that displays API data pulled from Giphy.com based on the search input of the user."
      )
      .fadeIn(1000);

    $("#dumpSkills").empty();
    $("#dumpSkills")
      .append(
        $("<span>")
          .addClass("badge badge-primary tech html")
          .text("HTML5")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech css")
          .text("CSS3")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech javascript")
          .text("JavaScript")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech jquery")
          .text("jQuery")
      )
      .fadeIn(1000);
  }
  if ($("#projectNum6").hasClass("active")) {
    $("#projectTitleDetails").text("");
    $("#projectTitleDetails")
      .text("PokéMatch")
      .fadeIn(1000);

    $("#aboutProjectDetails").text("");
    $("#aboutProjectDetails")
      .text(
        "PokéMatch is a compatibility-based application, sort of like those trivia websites that determine which movie character you are based on a series of questions. The application works off of answers given to the server by the user, which will then be compared to answers of pre-existing pokemon within a predefined api route. The application will then conclude by displaying the name and picture of the pokemon with the best overall match."
      )
      .fadeIn(1000);

    $("#dumpSkills").empty();
    $("#dumpSkills")
      .append(
        $("<span>")
          .addClass("badge badge-primary tech html")
          .text("HTML5")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech css")
          .text("CSS3")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech javascript")
          .text("JavaScript")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech jquery")
          .text("jQuery")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech bootstrap")
          .text("Bootstrap 4")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech node")
          .text("Node.js")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech express")
          .text("Express")
      )
      .fadeIn(1000);
  }
  if ($("#projectNum7").hasClass("active")) {
    $("#projectTitleDetails").text("");
    $("#projectTitleDetails")
      .text("CineGrub")
      .fadeIn(1000);

    $("#aboutProjectDetails").text("");
    $("#aboutProjectDetails")
      .text(
        "CineGrub was a collaborative project on a team of four with a deadline of two weeks to create a Minimum Viable Product. Upon registering an account with CineGrub, users were then able to search for movies and restaurants nearby using their zip code. Invitations can also be sent between CineGrub members for weekend plans!"
      )
      .fadeIn(1000);

    $("#dumpSkills").empty();
    $("#dumpSkills")
      .append(
        $("<span>")
          .addClass("badge badge-primary tech groupProject")
          .text("Group Project")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech html")
          .text("HTML5")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech css")
          .text("CSS3")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech javascript")
          .text("JavaScript")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech jquery")
          .text("jQuery")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech firebase")
          .text("Firebase")
      )
      .fadeIn(1000);
  }
  if ($("#projectNum8").hasClass("active")) {
    $("#projectTitleDetails").text("");
    $("#projectTitleDetails")
      .text("Schedulr")
      .fadeIn(1000);

    $("#aboutProjectDetails").text("");
    $("#aboutProjectDetails")
      .text(
        "Schedulr is a full stack application that was collaboratively created on a team of four. It is a third party application that any client such as a dental clinic could use to schedule appointments with their patients and send friendly reminders to their cell via text."
      )
      .fadeIn(1000);

    $("#dumpSkills").empty();
    $("#dumpSkills")
      .append(
        $("<span>")
          .addClass("badge badge-primary tech groupProject")
          .text("Group Project")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech html")
          .text("HTML5")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech css")
          .text("CSS3")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech javascript")
          .text("JavaScript")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech jquery")
          .text("jQuery")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech bootstrap")
          .text("Bootstrap 4")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech handlebars")
          .text("Handlebars")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech node")
          .text("Node.js")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech express")
          .text("Express")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech mysql")
          .text("MySQL")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech sequelize")
          .text("Sequelize")
      )
      .fadeIn(1000);
  }
  if ($("#projectNum9").hasClass("active")) {
    $("#projectTitleDetails").text("");
    $("#projectTitleDetails")
      .text("Game of Thrones RPG")
      .fadeIn(1000);

    $("#aboutProjectDetails").text("");
    $("#aboutProjectDetails")
      .text(
        "Game of Thrones is an RPG card-based game where you can choose a character with unique ATK/HP points and fight for control of the Iron Throne by first defeating all your adversaries."
      )
      .fadeIn(1000);

    $("#dumpSkills").empty();
    $("#dumpSkills")
      .append(
        $("<span>")
          .addClass("badge badge-primary tech html")
          .text("HTML5")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech css")
          .text("CSS3")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech javascript")
          .text("JavaScript")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech jquery")
          .text("jQuery")
      )
      .fadeIn(1000);
  }
  if ($("#projectNum10").hasClass("active")) {
    $("#projectTitleDetails").text("");
    $("#projectTitleDetails")
      .text("www.davidpadilla.io")
      .fadeIn(1000);

    $("#aboutProjectDetails").html("");
    $("#aboutProjectDetails")
      .html(
        "My personal portfolio made from scratch with absolutely no templates! Bootstrap 4 components where used and customized for mobile responsiveness across all devices. <br><em>Optimized for devices as small as 320px in width.<em>"
      )
      .fadeIn(1000);

    $("#dumpSkills").empty();
    $("#dumpSkills")
      .append(
        $("<span>")
          .addClass("badge badge-primary tech html")
          .text("HTML5")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech css")
          .text("CSS3")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech javascript")
          .text("JavaScript")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech jquery")
          .text("jQuery")
      )
      .append(
        $("<span>")
          .addClass("badge badge-primary tech bootstrap")
          .text("Bootstrap 4")
      )
      .fadeIn(1000);
  }
}

AOS.init();
