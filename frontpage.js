function changeintroover() {
  document.getElementById("intro").style.cssText =
    "padding-right: 15vw; font-style: italic; font-weight: 200; transition: 1.25s; opacity:0; pointer-events:none;";
  var x = document.getElementsByClassName("navlink");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.cssText = "text-decoration: none; color:#fff;";
  }
  x[0].style.cssText =
    "text-decoration: none; color:#fff; border-bottom: 1px solid #fff;";
}

function changeintroout() {
  document.getElementById("intro").style.cssText =
    "padding-right: 15vw; font-style: italic; font-weight: 200; transition: 2s; opacity:1;";
  var x = document.getElementsByClassName("navlink");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.cssText = "text-decoration: none; color:#b4b4b4;";
  }
  x[0].style.cssText =
    "text-decoration: none; color:#b4b4b4; border-bottom: 1px solid #b4b4b4;";
}
