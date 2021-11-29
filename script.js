// ciclo da 0 a 9
var array = [];
for (var i = 1; i < 10; i++) {
  // spingi nell'array il valore della classe "item"
  console.log (document.getElementsByClassName("provare"));
  var logg = document.getElementsByClassName("provare");
  console.log(logg[0]);
  var l = logg.data('data-value');

  array.push(document.querySelector(".provare")[i].getAttribute);
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
