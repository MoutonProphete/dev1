let nombre = parseInt(prompt("choisis un nombre"));
let somme = 0
for (let i = 1; i <= nombre; i++) {
  somme = somme*i;
}


console.log("La somme de la factorielle du nombre :", nombre, "est :", somme);
