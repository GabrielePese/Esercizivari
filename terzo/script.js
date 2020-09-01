// Al click su un bottone, il programma acquisisce tramite prompt un numero. Se il numero è positivo, il background di un p#colore diventa verde, se negativo rosso e se zero blu.

document.getElementById("button").addEventListener("click", function(){
  var numero = prompt ("Scrivi un numero");
  if (numero > 0) {document.getElementById("p").className = "green"}
  else if (numero < 0) {document.getElementById("p").className = "red"}
  else (numero == 0) {document.getElementById("p").className = "blue"}


});
