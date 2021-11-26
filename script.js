var array = [];
// ciclo da 0 a 9
for (var i = 0; i < 9; i++) {
  // spingi nell'array il valore della classe "item"
  array.push(document.getElementsByClassName("item")[i].getAttribute("value"));
  // se il valore nella posizione "i" nell'array è minore di 10
  if (array[i] < 10) {
    // rendi visibile l'elemento "new"
    const nuovo = document.createElement("div");
    const content = document.createTextNode("New!")
    nuovo.appendChild(content);
    nuovo.style.textAlign = "left"
    // altrimenti se il valore è maggiore/uguale a 10
  } else {
    // rendi visibile l'elemento "sold"
    const sold = document.createElement("div");
    const content = document.createTextNode("Sold!")
    sold.appendChild(content);
    sold.style.textAlign = "right"
  }
}
