let heure = prompt("entrer l'heure");
let min = prompt("entrer les minutes");
min = min + 1
if (min > 59) {
  min = 0;
  heure += 1;
}
if (heure == 24) {
  heure = 0;
}

alert("dans une minute il sera : " + heure + "h" + min);
