var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slide = document.getElementsByClassName("slide");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slide.length) {
    slideIndex = 1;
  }
  slide[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}
