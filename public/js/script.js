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
  "http://www.davidpadilla.io/CyberpunkHangman/",
  "http://www.davidpadilla.io/Villianous/",
  "https://recipedia-davidpadilla.herokuapp.com/",
  "https://gamelogger-app.herokuapp.com/",
  "https://cashscraper.herokuapp.com/",
  "https://pokematch-app.herokuapp.com/",
  "https://cinegrub.com/",
  "https://app-schedulr.herokuapp.com/",
  "http://www.davidpadilla.io/GameOfThronesRPG/",
  "https://davidpadilla.io/"
];

setTimeout(function() {
  var projectID = 1;
  $.each(projectURLs, function(i, url) {
    $("#projectNo" + projectID).attr("href", url);
    projectID++;
  });

  displaySkills();
  paginationInnerEvt();
  carouselArrowBtnEvt();
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

// Anime.js Plugin for Fade In Effect for "Full Stack Web Developer"
// Wraps Every Letter in a Span
$(".ml3").each(function() {
  $(this).html(
    $(this)
      .text()
      .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
  );
});

// Anime.js Plugin for Fade In Effect for "Full Stack Web Developer"
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

// The Array of Portfolio Project Objects - 10 Projects Max
var projects = [
  {
    project_number: 1,
    project_title: "Cyberpunk Hangman",
    project_description:
      "A cyberpunk themed hangman game that takes in user input, keeps track of guesses, and notifies the user of their wins/losses.",
    project_skills: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    project_number: 2,
    project_title: "Villianous",
    project_description:
      "Villianous is a front-end application where users must not press the same picture more than once or risk restarting their score back to zero. Memory is the name of the game because every picture will be rearranged into a different order for each point gained.",
    project_skills: ["HTML5", "CSS3", "Material-UI", "JavaScript", "React"]
  },
  {
    project_number: 3,
    project_title: "Recipedia",
    project_description:
      "Recipedia is a MERN-stack collaboration project that aims to make the process of finding recipes, planning meals, and grocery shopping lists easier.<br><br>A user signs up, searches for their favorite recipe, assigns it for dinner on Wednesday, and then sends themselves an automated list of the recipe's ingredients to their phone or email.<br><strong><em>It's that easy!</em></strong>",
    project_skills: [
      "Group Project",
      "HTML5",
      "CSS3",
      "Material-UI",
      "JavaScript",
      "React",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose"
    ]
  },
  {
    project_number: 4,
    project_title: "Gamelogger",
    project_description:
      "Gamelogger is a full stack application that users can use to add or delete videogames from their backlog and update once completed.",
    project_skills: [
      "HTML5",
      "CSS3",
      "Bootstrap 4",
      "JavaScript",
      "jQuery",
      "Handlebars",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize"
    ]
  },
  {
    project_number: 5,
    project_title: "CashScraper",
    project_description:
      "CashScraper is a basic full stack application that web scrapes finance-related articles from an external website using Cheerio, stores them into MongoDB, and then displays the information with the help of Mongoose to the user.",
    project_skills: [
      "HTML5",
      "CSS3",
      "Bootstrap 4",
      "JavaScript",
      "jQuery",
      "Handlebars",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose"
    ]
  },
  {
    project_number: 6,
    project_title: "PokéMatch",
    project_description:
      "PokéMatch is a compatibility-based application, sort of like those trivia websites that determine which movie character you are based on a series of questions. The application works off of answers given to the server by the user, which will then be compared to answers of pre-existing pokemon within a predefined api route. The application will then conclude by displaying the name and picture of the pokemon with the best overall match.",
    project_skills: [
      "HTML5",
      "CSS3",
      "Bootstrap 4",
      "JavaScript",
      "jQuery",
      "Node.js",
      "Express"
    ]
  },
  {
    project_number: 7,
    project_title: "CineGrub",
    project_description:
      "CineGrub was a collaborative project on a team of four with a deadline of two weeks to create a Minimum Viable Product. Upon registering an account with CineGrub, users were then able to search for movies and restaurants nearby using their zip code. Invitations can also be sent between CineGrub members for weekend plans!",
    project_skills: [
      "Group Project",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Firebase"
    ]
  },
  {
    project_number: 8,
    project_title: "Schedulr",
    project_description:
      "Schedulr is a full stack application that was collaboratively created on a team of four. It is a third party application that any client such as a dental clinic could use to schedule appointments with their patients and send friendly reminders to their cell via text.",
    project_skills: [
      "Group Project",
      "HTML5",
      "CSS3",
      "Bootstrap 4",
      "JavaScript",
      "jQuery",
      "Handlebars",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize"
    ]
  },
  {
    project_number: 9,
    project_title: "Game of Thrones RPG",
    project_description:
      "Game of Thrones is an RPG card-based game where you can choose a character with unique ATK/HP points and fight for control of the Iron Throne by first defeating all your adversaries.",
    project_skills: ["HTML5", "CSS3", "JavaScript", "jQuery"]
  },
  {
    project_number: 10,
    project_title: "www.davidpadilla.io",
    project_description:
      "My personal portfolio made from scratch with absolutely no templates! Bootstrap 4 components where used and customized for mobile responsiveness across all devices.<br><em>Optimized for devices as small as 320px in width.<em>",
    project_skills: ["HTML5", "CSS3", "Bootstrap 4", "JavaScript", "jQuery"]
  }
];

// This callback function will render the skill tags for each portfolio project
function renderSkillTags(skillArray) {
  $("#dumpSkills").empty();

  for (var i = 0; i < skillArray.length; i++) {
    var htmlSpan = $("<span>");
    htmlSpan
      .addClass("badge badge-primary tech " + skillArray[i])
      .text(skillArray[i]);
    $("#dumpSkills").append(htmlSpan);
  }

  $("#dumpSkills")
    .append(htmlSpan)
    .fadeIn(1000);
}

// This function will run through the array of project objects to create carousel info for each project image
function renderCarouselInfo(projectObj, cb) {
  for (var j = 0; j < projectObj.length; j++) {
    if ($("#projectNum" + projectObj[j].project_number).hasClass("active")) {
      $("#projectTitleDetails")
        .text("")
        .text(projectObj[j].project_title)
        .fadeIn(1000);

      $("#aboutProjectDetails")
        .html("")
        .html(projectObj[j].project_description)
        .fadeIn(1000);

      cb(projectObj[j].project_skills);
    }
  }
}

function displaySkills() {
  renderCarouselInfo(projects, renderSkillTags);
}

// Fixes bug issues on mouse swipes & finger swipes with iMac Carousel
setInterval(function() {
  displaySkills();
}, 1000);

// Click Handler for Circle Tabs
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

// Click Handler for Carousel Arrows
function carouselArrowBtnEvt() {
  $(".fc-btn").on("click", function() {
    $("#projectTitleDetails").hide();
    $("#aboutProjectDetails").hide();
    $("#dumpSkills").hide();
    displaySkills();
  });
}

// Assigns Click Handler Events to Carousel Arrows & Circle Tabs
setTimeout(function() {
  paginationInnerEvt();
  carouselArrowBtnEvt();
}, 3000);

// Failsafe function if the above function's elements do not exist yet
setTimeout(function() {
  if ($("#projectNo1").length === 0) {
    paginationInnerEvt();
    carouselArrowBtnEvt();
  }
}, 11000);

// Initializing AOS Plugin for Animation
AOS.init();
