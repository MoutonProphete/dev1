const personnages = [
  { nom: "Luke Skywalker", espece: "Humain", affiliation: "Jedi" },
  { nom: "Darth Vader", espece: "Humain", affiliation: "Sith" },
  { nom: "Yoda", espece: "Yoda's species", affiliation: "Jedi" },
  { nom: "Obi-Wan Kenobi", espece: "Humain", affiliation: "Jedi" },
];

//    on affiche les personnages avec leur particularités

/*for (let i = 0; i < personnages.length;i++){
    console.log(personnages[i]);
}*/

// on affiche que les noms

/*for(let i = 0; i < personnages.length;i++){
    console.log(personnages[i].nom);
}*/

// OU

/*for (personnage of personnages){
    console.log(personnage.nom);
}*/

/*let personnagesJedi = filterParAffiliation("Jedi", personnages);

function filterParAffiliation(affiliation, tableau) {
  let resultats = [];
  for (let i = 0; i < personnages.length; i++) {
    if (affiliation == tableau[i].affiliation);
    {
      resultats.push(tableau[i]);
    }
  }
  return resultats;
}
console.log(personnagesJedi);*/


function filtrerAffiliation(affiliation) {
  for (let i = 0; i < personnages.length ; i++) {
      if (affiliation == personnages[i].affiliation) {
          console.log(personnages[i].nom);
      }
  }
}


function chercherParNom(nom){
  for (let i = 0; i < personnages.length ; i++) {
    if (nom == personnages[i].nom){
      console.log(personnages[i].espece)
    }
  }
}






function chercherPresence(nom){
  for (let i = 0; i < personnages.length ; i++) {
    if (nom == personnages[i].nom){
      console.log("le personnage" + nom + "est present")
    }
  }
}



// exo 2
function calculerNombreTotal() {
  let total = 0;
  for (let i = 0; i < personnages.length; i++) {
    total++;
    }
  console.log("il y a " + total)
}



// exo 2 avec ret
function calculerPerso1(){
  let nmbre = 0;
  for(i = 0 ; i<personnages.length; i ++){
  nmbre++; 
}
  return(nmbre);
  }
let nmbrePersonnage = calculerPerso1(personnages);
console.log(nmbrePersonnage);



/*let presencePersonnages = presencePersonnages("nom", personnages);
function presencePersonnages(nom, tableau) {
  for (let i = 0; i < affiliation.length; i++)
    if (tableau[i].nom === nom) {
      return true;
    }
}*/
