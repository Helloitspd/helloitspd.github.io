function changeintroover() {
  document.getElementById("intro").style.cssText =
    "padding-right: 15vw; font-style: italic; font-weight: 200; transition: 1.25s; opacity:0; pointer-events:none;";
  var x = document.getElementsByClassName("navlink");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.cssText = "text-decoration: none; color:#fff;";
  }
}

function changeintroout() {
  document.getElementById("intro").style.cssText =
    "padding-right: 15vw; font-style: italic; font-weight: 200; transition: 2s; opacity:1;";
  var x = document.getElementsByClassName("navlink");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.cssText = "text-decoration: none; color:#b4b4b4;";
  }
}

window.addEventListener("scroll", function(event) {
  if (
    window.innerHeight + window.pageYOffset >=
    document.body.offsetHeight - 2
  ) {
    document.getElementById("mouse").style.opacity = 0;
  } else {
    document.getElementById("mouse").style.opacity = 1;
  }
});
