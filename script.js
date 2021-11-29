// ciclo da 0 a 9
var array = [];
for (var i = 1; i < 10; i++) {
  // spingi nell'array il valore della classe "item"
  // console.log(document.getElementsByClassName("provare"));
  var logg = document.getElementsByClassName("provare").innerHTML;
  console.log(logg);
  // var l = logg.data("data-value");
  var items = document.getElementsByClassName("provare");// For each test item in the list,
  // append the entire element as a string of HTMLvar gross = "";for (var i = 0; i < items.length; i++) {
  // var l;
  //   var logg = document.getElementsByClassName("provare").slick("slickFilter",function(){
  //   return l.find(".slickSlide").attr("data-value")
  // })
  // $(".provare").slick("SlickFilter", function () {
  //   return $(this).find(".slickSlide").attr("data-value");
  // });
  //  $('#slider2').slick('slickFilter', function() {
  //     return $(this).find('.slickSlide').attr("data-test-id") == "1";
  // });

  // array.push(document.querySelector(".provare")[i].getAttribute);
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
