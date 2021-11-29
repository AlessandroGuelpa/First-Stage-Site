// ciclo da 0 a 9
var array = [];
for (var i = 0; i <= 9; i++) {
  // spingi nell'array il valore della classe "item"
  var p = document.querySelectorAll(".provare")[i].getAttribute("value");
  array.push(p);
  // se il valore nella posizione "i" nell'array è minore di 10
  if (array[i] < 10) {
    // rendi visibile l'elemento "new"
    // altrimenti se il valore è maggiore/uguale a 10
  } else {
    // rendi visibile l'elemento "sold"
  }
}
