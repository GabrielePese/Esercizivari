// Nella pagina ci sono due input(num1, num2) e una select con options(somma,sottrai,moltiplica,dividi).
// // Al click su un bottone, il programma inserisce in un p#risultato il risultato dell'operazione scelta.

document.getElementById("button").addEventListener("click", function(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var risultato = document.getElementById("risultato");

  if (document.getElementById("opt").value == 1) {
    risultato.innerHTML = num1 + num2;
  }
  else if (document.getElementById("opt").value == 2) {risultato.innerHTML = num1 - num2;}
  else if (document.getElementById("opt").value == 3) {risultato.innerHTML = num1 * num2;}

  else if (document.getElementById("opt").value == 4)  {
    if (num2 == 0) {
       risultato.innerHTML = "dimmi stai sbagliando";

  }
  else { risultato.innerHTML = num1 / num2;

  }
}

});
