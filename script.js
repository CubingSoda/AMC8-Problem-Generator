/*@preserve
Minified main script file | https://amc8.pages.dev/script.js | SUBJECT TO THE TERMS IN LICENSE (https://amc8.pages.dev/LICENSE.txt)
*/
// the above comment will show in the  minified file.

correct_rate = 0;
wrong_rate = 0;
giveups = 0;
//correct_rate_on_two = 0

attempts = "";

function show(name, text) {
  // Show the mask
  $("#screen-mask").show();

  // Show the popup/alert
  $(name).show();

  // Change the text
  $(`${name} p`).text(text);
}

function popup(text) {
  show("#popup-modal", text);

  // Close the modal when the button is clicked
  $("#popup-modal button").click(() => {
    $("#screen-mask").hide();
    $("#popup-modal").hide();
  });
}

function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random_prob() {
  console.log("New Problem Generated");
  attempts = "";
  $("#sub").css("display", "block");
  $("#submitanswer").attr("placeholder", "Enter Your Answer");
  $("#giveup").prop("disabled", true);
  $("#submitanswer").focus();
  $("#submitanswer").val("");

  year = randint(1999, 2018).toString();

  problemnum = randint(0, 24); //random problem number

  // A check
  if (problemnum > 25) {
    problemnum = 25;
  }

  // console.log(year + " " + problemnum)
  console.log(`${year}#${problemnum + 1}`);

  $("#problem_text").html(problems[year][problemnum]);

  // $("#problem_select").html(
  //   "A) " +
  //   selecters[year][problemnum][0] +
  //   "&emsp;&emsp;" +
  //   "B) " +
  //   selecters[year][problemnum][1] +
  //   "&emsp;&emsp;" +
  //   "C) " +
  //   selecters[year][problemnum][2] +
  //   "&emsp;&emsp;" +
  //   "D) " +
  //   selecters[year][problemnum][3] +
  //   "&emsp;&emsp;" +
  //   "E) " +
  //   selecters[year][problemnum][4]
  // );

  MathJax.typeset();
}

function set_prob(problemnum, year) {
  attempts = "";
  $("#sub").css("display", "block");
  $("#submitanswer").attr("placeholder", "Enter Your Answer");
  $("#giveup").prop("disabled", true);
  $("#submitanswer").focus();
  $("#submitanswer").val("");

  console.log(`${year}#${problemnum + 1}`);

  $("#problem_text").html(problems[year][problemnum]);

  // $("#problem_select").html(
  //   "A) " +
  //   selecters[year][problemnum][0] +
  //   "&emsp;&emsp;" +
  //   "B) " +
  //   selecters[year][problemnum][1] +
  //   "&emsp;&emsp;" +
  //   "C) " +
  //   selecters[year][problemnum][2] +
  //   "&emsp;&emsp;" +
  //   "D) " +
  //   selecters[year][problemnum][3] +
  //   "&emsp;&emsp;" +
  //   "E) " +
  //   selecters[year][problemnum][4]
  // );

  MathJax.typeset();
}

function check_answer() {
  // Check if the input is empty
  if ($("#submitanswer").val().toUpperCase() === "") {
    popup("Please enter an option");
  }

  // Check if the input is valid
  else if (
    ["A", "B", "C", "D", "E"].includes(
      $("#submitanswer").val().toUpperCase()
    ) === false
  ) {
    popup("That is not a valid option. Please enter A, B, C, D, or E");
  }

  // Check if the input was already submitted before
  else if ($("#submitanswer").val().toUpperCase() === attempts) {
    popup(
      "You already submitted this answer before. I won't count it wrong again, so you still have another shot. Keep trying!"
    );
    $("#submitanswer").val("");
  } else if (
    $("#submitanswer").val().toUpperCase() === answerkey[year][problemnum]
  ) {
    // Correct on the first try
    if (attempts === "") {
      correct_rate++;
      $("#probsdone").html(parseFloat($("#probsdone").html()) + 1);
      $("#correct").css("display", "block");
      $("#youranswer_c").html($("#submitanswer").val().toUpperCase());
      $("#correct_year").html(year);
      $("#correct_prob").html((problemnum + 1).toString());
      $("#correct_problem").html(problems[year][problemnum]);
      // $("#correct_choices").html("A) " + selecters[year][problemnum][0] + "&emsp;&emsp;" + "B) " + selecters[year][problemnum][1] + "&emsp;&emsp;" + "C) " + selecters[year][problemnum][2] + "&emsp;&emsp;" + "D) " + selecters[year][problemnum][3] + "&emsp;&emsp;" + "E) " + selecters[year][problemnum][4])
      $("#correct_wiki").attr(
        "href",
        "https://artofproblemsolving.com/wiki/index.php/" +
          year +
          "_AMC_8_Problems/Problem_" +
          (problemnum + 1)
      );

      MathJax.typeset();
    } else {
      correct_rate++;
      $("#probsdone").html(parseFloat($("#probsdone").html()) + 1);
      // Correct on the second try
      $("#correct_incorrect").css("display", "block");
      $("#youranswer_ci").html(attempts);
      $("#youranswer_cit").html($("#submitanswer").val().toUpperCase());
      $("#correct_yeari").html(year);
      $("#correct_probi").html((problemnum + 1).toString());
      $("#correctin_problemi").html(problems[year][problemnum]);
      // $("#correctin_choicesi").html("A) " + selecters[year][problemnum][0] + "&emsp;&emsp;" + "B) " + selecters[year][problemnum][1] + "&emsp;&emsp;" + "C) " + selecters[year][problemnum][2] + "&emsp;&emsp;" + "D) " + selecters[year][problemnum][3] + "&emsp;&emsp;" + "E) " + selecters[year][problemnum][4])
      $("#correct_wikii").attr(
        "href",
        "https://artofproblemsolving.com/wiki/index.php/" +
          year +
          "_AMC_8_Problems/Problem_" +
          (problemnum + 1)
      );

      MathJax.typeset();
    }
  } else {
    // Incorrect for the FIRST try
    $("#giveup").prop("disabled", false);
    if (attempts === "") {
      popup("Your answer is incorrect, but you may try again");
      document.getElementById("submitanswer").focus();
      $("#submitanswer").attr(
        "placeholder",
        "Incorrect. First Attempt: " + $("#submitanswer").val().toUpperCase()
      );
      attempts = $("#submitanswer").val().toUpperCase();
      $("#submitanswer").val("");
    }
    // Incorrect for the SECOND try (No more tries)
    else {
      wrong_rate++;
      $("#probsdone").html(parseFloat($("#probsdone").html()) + 1);
      $("#incorrect").css("display", "block");
      $("#incorrect_problem_choice_one").html(attempts);
      $("#incorrect_problem_choice_two").html(
        $("#submitanswer").val().toUpperCase()
      );
      $("#incorrect_year").html(year);
      $("#incorrect_correct_answer").html(answerkey[year][problemnum]);
      $("#incorrect_prob").html((problemnum + 1).toString());
      $("#incorrect_problem").html(problems[year][problemnum]);
      // $("#incorrect_choice").html("A) " + selecters[year][problemnum][0] + "&emsp;&emsp;" + "B) " + selecters[year][problemnum][1] + "&emsp;&emsp;" + "C) " + selecters[year][problemnum][2] + "&emsp;&emsp;" + "D) " + selecters[year][problemnum][3] + "&emsp;&emsp;" + "E) " + selecters[year][problemnum][4])
      $("#incorrect_wiki").attr(
        "href",
        "https://artofproblemsolving.com/wiki/index.php/" +
          year +
          "_AMC_8_Problems/Problem_" +
          (problemnum + 1)
      );

      MathJax.typeset();
    }
  }
}

// Code for the start button click
$("#bluebutton").click(function () {
  console.log("blue button clicked");
  random_prob();
  $("#problem_frame").css("display", "block");
  $("#homescreen").css("display", "none");
  $("#submitanswer").css("display", "block");
  // popup("Please note that to generate our problems, we are using the JavaScript Math.random number generator. That code only returns a number from zero to one though. The code that I created to amplify the range from zero to twenty five is not perfect though, it occasionally returns problem '26', which doesn't exist. Please don't spam bug reports if the problem number is 26. (None of my codes that try to block that aren't working!)")
  MathJax.typeset();
});

$("#problem_frame").css("display", "none");

//Detect enter key press
$("#submitanswer").keyup(function (event) {
  if (event.which === 13) {
    check_answer();
  }
});

// Give up
function giveup() {
  yn = confirm("Are you sure you want to give up?");
  if (yn) {
    giveups++;
    $("#probsdone").html(parseFloat($("#probsdone").html()) + 1);
    $("#giveup_modal").css("display", "block");
    $("#giveup_problem_choice").html(attempts);
    $("#giveup_year").html(year);
    $("#giveup_correct_answer").html(answerkey[year][problemnum]);
    $("#giveup_prob").html((problemnum + 1).toString());
    $("#giveup_problem").html(problems[year][problemnum]);
    // $("#giveup_choice").html("A) " + selecters[year][problemnum][0] + "&emsp;&emsp;" + "B) " + selecters[year][problemnum][1] + "&emsp;&emsp;" + "C) " + selecters[year][problemnum][2] + "&emsp;&emsp;" + "D) " + selecters[year][problemnum][3] + "&emsp;&emsp;" + "E) " + selecters[year][problemnum][4])
    $("#giveup_wiki").attr(
      "href",
      "https://artofproblemsolving.com/wiki/index.php/" +
        year +
        "_AMC_8_Problems/Problem_" +
        (problemnum + 1)
    );

    MathJax.typeset();
  }
}
function status() {
  total = giveups + correct_rate + wrong_rate;
  document.getElementById("status-modal").style.display = "block";

  /* Does this fix the NaN? */
  if (total != 0) {
    var correct = (correct_rate / total) * 100;
    var wrong = (wrong_rate / total) * 100;
    var giveup_rate = (giveups / total) * 100;
  } else {
    var correct = 0;
    var wrong = 0;
    var giveup_rate = 0;
  }
  document.getElementById("piechart").style.backgroundImage =
    "conic-gradient(rgba(255, 140, 0, 0.6) " +
    wrong +
    "%, rgba(0, 255, 0, 0.6) 0 " +
    (correct + wrong) +
    "%, rgba(255,0,0,0.6) 0)";
  document.getElementById("wrong_stats").innerHTML =
    Math.round(wrong).toString() +
    "% wrong. " +
    wrong_rate.toString() +
    " questions wrong";
  document.getElementById("correct_stats").innerHTML =
    Math.round(correct).toString() +
    "% correct. " +
    correct_rate.toString() +
    " questions correct";
  document.getElementById("giveups_stats").innerHTML =
    Math.round(giveup_rate) +
    "% giveup. " +
    giveups.toString() +
    " questions giveups";
}

$("#savecookie").on("click", cookie);
function cookie() {
  list = new Array();
  list.push(correct_rate);
  list.push(wrong_rate);
  list.push(giveups);
  document.cookie =
    "stats=" + list + "; expires=Thu, 1 Jan 2026 12:00:00 UTC; path=/";
  console.log("Data has been saved in cookie");
}
//read the cookie. just do getCookie('stats')
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
cookies = getCookie("stats");
cookies = cookies.split(",");
if (cookies[0] === "") {
  correct_rate = 0;
  cookie();
}
if (cookies[1] === "") {
  wrong_rate = 0;
  cookie();
}
if (cookies[2] === "") {
  giveups = 0;
  cookie();
} else {
  correct_rate = parseFloat(cookies[0]);
  wrong_rate = parseFloat(cookies[1]);
  giveups = parseFloat(cookies[2]);
}
window.on("load", () => {
  if (getCookie("clicked") === "yes") {
    $("#cookiejar").remove();
  }
  if (getCookie("dismisscheat") === "yes") {
    $("#cheatnotice").remove();
  }
});
function check_blanks() {
  console.log("Starting blank check...");
  for (var a = 1999; a < 2021; a++) {
    for (var b = 1; b < 26; b++) {
      if (problems[a.toString()][b.toString()] === "") {
        console.log(a, b);
      }
    }
  }
  console.log("Ending blank check...");
}
/*$("#report_moreinfo").on("keypress", function(){
  splitt = $("#report_moreinfo").val().split("\r")
  $("#report_moreinfo").css("height", (splitt.length*25).toString()+"px")
}) */
$("#report_moreinfo").css("height", "100px");

/*
$(function () {
  popup("We are currently having technical difficulties\nPlease stand by");
  $("#popup-modal>button").remove();
});
// Replace with commented inline because chances are, the script won't load */
const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    /* Toggle between adding and removing the "active" class,
		to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
