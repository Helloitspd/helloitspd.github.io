function viewScript() {
  document.getElementById("script").style.cssText = "height: fit-content;";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

var appleIndex = 1;
appleShow(appleIndex);

// Next/previous controls
function addApple(a) {
  appleShow((appleIndex += a));
}

// Thumbnail image controls
function appleCurrent(a) {
  appleShow((appleIndex = a));
}

function appleShow(a) {
  var x;
  var apple = document.getElementsByClassName("myApple");
  if (a > apple.length) {
    appleIndex = 1;
  }
  if (a < 1) {
    appleIndex = apple.length;
  }
  for (x = 0; x < apple.length; x++) {
    apple[x].style.display = "none";
  }
  apple[appleIndex - 1].style.display = "block";
}
