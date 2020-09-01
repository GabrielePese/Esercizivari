document.getElementById("button").addEventListener("click", function (){
  var num1 = Math.floor(Math.random () *10)+1;
  var risultato = parseInt((num1 % 2))


  if (risultato == 0) {document.getElementById("moneta").className = "pari"}
  else {document.getElementById("moneta").className = "dispari"}



});
