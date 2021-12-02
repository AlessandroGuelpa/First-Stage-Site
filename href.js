$(function () {
  // cliccando l'elemento <a> con tutti i valori di href "#"
  $('a[href="#noi"]').click(function () {
    // this.hash legge l'attributo di href e prende la parte di url che inizia per #
    var target = $(this.hash);
    // check per controllare se target e target.lenght non siano null oppure undefined e assegna target a se stesso oppure a &('[name....')
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    // se target.lenght è true
    if (target.length) {
      // scorri il body fino al target
      $("html, body").animate(
        {
          // scrolling - 200 in modo da non farlo coprire con l'header, equivalente di "scroll-padding-top"
          scrollTop: target.offset().top - 80,
        },
        // impiegandoci 1 secondo
        1000
      );
      return false;
    }
  });
  $('a[href="#info"]').click(function () {
    // this.hash legge l'attributo di href e prende la parte di url che inizia per #
    var target = $(this.hash);
    // check per controllare se target e target.lenght non siano null oppure undefined e assegna target a se stesso oppure a &('[name....')
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    // se target.lenght è true
    if (target.length) {
      // scorri il body fino al target
      $("html, body").animate(
        {
          // scrolling - 200 in modo da non farlo coprire con l'header, equivalente di "scroll-padding-top"
          scrollTop: target.offset().top - 200,
        },
        // impiegandoci 1 secondo
        1000
      );
      return false;
    }
  });
  $('a[href="#port"]').click(function () {
    // this.hash legge l'attributo di href e prende la parte di url che inizia per #
    var target = $(this.hash);
    // check per controllare se target e target.lenght non siano null oppure undefined e assegna target a se stesso oppure a &('[name....')
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    // se target.lenght è true
    if (target.length) {
      // scorri il body fino al target
      $("html, body").animate(
        {
          // scrolling - 200 in modo da non farlo coprire con l'header, equivalente di "scroll-padding-top"
          scrollTop: target.offset().top - 80,
        },
        // impiegandoci 1 secondo
        1000
      );
      return false;
    }
  });
  $('a[href="#dove"]').click(function () {
    // this.hash legge l'attributo di href e prende la parte di url che inizia per #
    var target = $(this.hash);
    // check per controllare se target e target.lenght non siano null oppure undefined e assegna target a se stesso oppure a &('[name....')
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    // se target.lenght è true
    if (target.length) {
      // scorri il body fino al target
      $("html, body").animate(
        {
          // scrolling - 200 in modo da non farlo coprire con l'header, equivalente di "scroll-padding-top"
          scrollTop: target.offset().top - 80,
        },
        // impiegandoci 1 secondo
        1000
      );
      return false;
    }
  });
});
