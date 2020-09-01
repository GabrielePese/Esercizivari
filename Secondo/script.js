// L’utente inserisce nome e cognome nei relativi input, al click su un bottone, concatenare i valori degli input e stampare in console.
//


document.getElementById("stampa").addEventListener("click", function (){

var nome = document.getElementById("nome").value;
var cognome = document.getElementById("cognome").value;

console.log(nome +" "+ cognome)
});
