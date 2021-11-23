// il gap è lo spazio fra una griglia e l'altra
const gap = 9;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");
// quando clicco sul tasto next:
next.addEventListener("click", () => {
  // cambiano le coordinate di x (larghezza + gap(9)), la y è 0
  carousel.scrollBy(width + gap, 0);
  // se la x è diversa da 0 visualizza il tasto per andare alla x precendente
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  // se la x è minor/uguale alla larghezza massima dello scroll, nasconde il tasto next
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
// quando clicco sul tasto prev:
prev.addEventListener("click", () => {
  // le coordinate di x vanno a larghezza - gap
  carousel.scrollBy(-(width + gap), 0);
  // se la x - la grandezza dello schermo - il gap è minore/uguale allo 0(cioè il punto piu a sinistra sulla pagina):
  if (carousel.scrollLeft - width - gap <= 0) {
    // nascondi tasto per tornare allo scroll precendente
    prev.style.display = "none";
  }
  // se la x - la larghezza dello schermo - il gap è minore/uguale della larghezza dello spostamento a sinistra sommata al width
  // se la x si trova all'inizio della pagina oppure in un punto prima ma che comunque è minore della larghezza totale dello scroll:
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    // visualizza il tasto next
    next.style.display = "flex";
  }
});
// restituisce un intero data la larghezza del layout
let width = carousel.offsetWidth;
// quando la finestra viene deformata, salva la larghezza nella variabile
window.addEventListener("resize", () => (width = carousel.offsetWidth));
// creazione array
windows.onload = function(){
  var array = [];
// ciclo da 0 a 9
for (var i = 0; i < 10; i++) {
  // spingi nell'array il valore della classe "item"
  array.push(document.getElementsByClassName("item")[i].getAttribute("value"));
  // se il valore nella posizione "i" nell'array è minore di 10
  if (array[i] < 10) {
    // rendi visibile l'elemento "new"
    document.getElementsByClassName("new")[i].style.visibility = "visible";
    // altrimenti se il valore è maggiore/uguale a 10
  } else {
    // rendi visibile l'elemento "sold"
    document.getElementsByClassName("sold")[i].style.visibility = "visible";
  }
}
}
var array = [];
// ciclo da 0 a 9
for (var i = 0; i < 10; i++) {
  // spingi nell'array il valore della classe "item"
  array.push(document.getElementsByClassName("item")[i].getAttribute("value"));
  // se il valore nella posizione "i" nell'array è minore di 10
  if (array[i] < 10) {
    // rendi visibile l'elemento "new"
    document.getElementsByClassName("new")[i].style.visibility = "visible";
    // altrimenti se il valore è maggiore/uguale a 10
  } else {
    // rendi visibile l'elemento "sold"
    document.getElementsByClassName("sold")[i].style.visibility = "visible";
  }
}
