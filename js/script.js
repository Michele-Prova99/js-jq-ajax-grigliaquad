// Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX
// che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

$(document).ready(function(){

  generaQuadrati();

  $(".square").click(function(){

    var q = $(this);

  $.ajax(

    {

      "url" : "https://flynn.boolean.careers/exercises/api/random/int",

      "method" : "GET",

      "success" : function(risposta){
        console.log(risposta.response);

        if (q.hasClass("cliccato")){
          alert("Già cliccato");
        } else {
          q.addClass("cliccato");
          q.text(risposta.response);

          if (risposta.response <= 5) {
            q.addClass("yellow");
          } else {
            q.addClass("green");
          }

        }

      },

      "error" : function(){
        alert("Ci sono stati degli errori");
      }

    }

  );

  });

});

function generaQuadrati(){

  for (var i = 0; i < 36; i++){
    var quadrato = $(".template .square").clone();
    $(".container").append(quadrato);
  }

}
