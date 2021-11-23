showSlides();

function showSlides() {
  var slideIndex = 0;
  var slide = document.getElementsByClassName("slide");
  slideIndex++;
  if (slideIndex > slide.length) {
    slideIndex = 1;
  }
  slide[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}
