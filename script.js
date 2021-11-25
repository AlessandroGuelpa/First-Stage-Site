var array = [];
// ciclo da 0 a 9
for (var i = 0; i < 9; i++) {
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
function return_to_top() {
  $("html, body").animate({scrollTop : 0}, "slow")

}
