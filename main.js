document.body.classList.add("js-loading");

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove("js-loading");
}

// // Adjust the "querySelector" value to target your image
// var img = document.querySelector("img");
// document.body.classList.add("js-loading");
// img.addEventListener("load", removeLoadingClass);
// function removeLoadingClass() {
//   document.body.classList.remove("js-loading");
// }

function ShowDiv() {
  var div = document.getElementById("more-info");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

$(window).on("load", function() {
  var viewportWidth = $(window).width();
  if (viewportWidth < 1200) {
    $(".typewriter").removeClass("typewriter");
  }
});
