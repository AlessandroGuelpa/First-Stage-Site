//quando la finestra cambia la propria y, viene chiamatahow to la funzione scroll
window.onscroll = function () {
  scroll();
};
// salvo in una variabile il bottone
var btn = document.querySelector("#btn");
function scroll() {
  // se lo scroll dall'alto è maggiore di 300
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    // rendi visibile il bottone
    btn.style.visibility = "visible";
    // se lo scroll è minore di 300,  nascondi il bottone
  } else {
    btn.style.visibility = "hidden";
  }
}
// funzione quando clicchi il bottone
function return_to_top() {
  // lo scrollTop torna all'inizio della pagina, inpiegandoci 2 secondi (2000 ms)
  $("html, body").animate({ scrollTop: 0 }, 2000);
}
