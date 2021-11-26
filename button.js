//quando la finestra cambia la propria y, viene compilata la funzione scroll 
window.onscroll = function () {
  scroll();
};
var btn = document.querySelector("#btn")
function scroll() {

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.visibility = "visible";
  }else{
    btn.style.visibility = "hidden";
  }
}
function return_to_top() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
}
