
// Al click su un bottone, il programma genera un numero casuale tra 1 e 10. Se il numero è pari, toglie la classe pari da p#numero.pari.dispari altrimenti toglie la classe dispari.


document.getElementById("button").addEventListener ("click", function (){
  var numero = Math.floor(Math.random ()*10)+1;


  if ((numero % 2) ==0) {document.getElementById("para").classList.remove("dispari")}
  else {document.getElementById("para").classList.remove("pari")};

document.getElementById("numero").innerHTML = numero;
  });
