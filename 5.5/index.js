let nombre = parseInt(prompt("entrer un nombre"));
let somme = 0;
for (let i = 1; i <= nombre; i++) {
  somme += i;
}


console.log("La somme des entiers jusqu'à", nombre, "est :", somme);
