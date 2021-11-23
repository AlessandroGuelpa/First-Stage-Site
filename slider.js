var slideIndex = 0;
var bullet = document.getElementsByClassName("bullet").getAttribute("value");

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
document.getElementsByClassName("bullet").onclick = function(){
  if(bullet == 1){
    slideIndex = 0;
  }
  if(bullet == 2){
    slideIndex = 1;
  }
  if(bullet == 3){
    slideIndex = 2;
  }
  if(bullet == 4){
    slideIndex = 3;
  }
}