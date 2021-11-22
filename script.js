const gap = 9;
const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", () => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", () => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", () => (width = carousel.offsetWidth));
var array = [];
for (var i = 0; i < 10; i++) {
  array.push(document.getElementsByClassName("item")[i].getAttribute("value"));
  console.log(document.getElementByClassName("item")[i];
  if (array[i] < 10) {
    document.getElementsByClassName("new")[i].style.visibility = "visible";
  } else {
    document.getElementsByClassName("sold")[i].style.visibility = "visible";
  }
}
