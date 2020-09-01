// Nella pagina ci sono due input(num1, num2) e una select con options(somma,sottrai,moltiplica,dividi).
// // Al click su un bottone, il programma inserisce in un p#result il risultato dell'operazione scelta.

document.getElementById("button").addEventListener("click", function(){
  var num1 = parseInt(document.getElementById("num1").value;
  var num2 = parseInt(document.getElementById("num2").value;
  var operazione = document.getElementById("operazione").value;
  var result = document.getElementById("result").value;


  if (operazione == "") {rsult.innerHTML "Non hai selezioanto nulla!"}
  else if (operazione == 1) {result.innerHTML = num1 + num2;
  }else if (operazione == 2) {result.innerHTML = num1 - num2;
  }else if (operazione == 3) {result.innerHTML = num1 * num2;
  }else if (operazione == 4)
  if (num2 == 0) {result.innerHTML = "Il secondo numero è 0"
  } else {result.innerHTML = num1 / num2;

  }

  console.log (risultato)
});
