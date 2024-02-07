let age = prompt("saisir votre age");
let anneePermis = prompt("saisir vos années de permis");
let accident = prompt("saisir votre nombre d'accidents");
let fidelite = prompt("saisir vos années de fidelite");
let compteurPrime = 0;

if (accident > 2) {
  alert("le conducteur est refusé");
} else if (age > 25) {
  compteurPrime = compteurPrime+1;
}
if (anneePermis>2){
    compteurPrime = compteurPrime+1;
}
if (fidelite>1){
    compteurPrime = compteurPrime+1;
}
compteurPrime = compteurPrime-accident;
if(compteurPrime == 3){
    alert("tarif bleu")
}
if(compteurPrime == 2){
    alert("tarif vert")
}
if(compteurPrime == 1){
    alert("tarif orange")
}
if(compteurPrime == 0){
    alert("tarif rouge")
}