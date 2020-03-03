function changeintroover() {
  document.getElementById("intro").style.cssText =
    "padding-right: 15vw; font-style: italic; font-weight: 200; transition: 1.25s; opacity:0; pointer-events:none;";
  document.getElementById("st1").style.cssText =
    "fill:#e91B00; fill-opacity:0.35; stroke:#e91B00;stroke-width:1.5;stroke-miterlimit:10;";
  document.getElementById("st0").style.fill = "white";
  document.getElementById("st2").style.stroke = "white";
  document.getElementById("st3").style.stroke = "white";
  var x = document.getElementsByClassName("navlink");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.cssText = "text-decoration: none; color:#fff;";
  }
}

function changeintroout() {
  document.getElementById("intro").style.cssText =
    "padding-right: 15vw; font-style: italic; font-weight: 200; transition: 2s; opacity:1;";
  document.getElementById("st1").style.cssText =
    "fill:#000; fill-opacity:0.35; stroke:#000;stroke-width:1.5;stroke-miterlimit:10;";
  document.getElementById("st0").style.fill = "white";
  document.getElementById("st2").style.stroke = "white";
  document.getElementById("st3").style.stroke = "white";
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
