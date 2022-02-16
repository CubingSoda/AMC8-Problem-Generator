let environment = "prod";

function set_dev() {
  console.log("Changing Environment . . . ");
  $("#main_script").attr("src", "/script.js");
  $("#main_style").attr("href", "/style.css");
  $("#problems_script").attr("src", "/problems.js");
  environment = "dev";
  console.log("Environment changed!");
}

function set_prod() {
  console.log("Changing Environment . . . ");
  $("#main_script").attr("src", "/dist/script.js");
  $("#main_style").attr("href", "/dist/style.css");
  $("#problems_script").attr("src", "/dist/problems.js");
  environment = "prod";
  console.log("Environment changed!");
}
