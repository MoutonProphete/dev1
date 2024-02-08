function saisirNombre(){
//je declare la variable entier sans l'instancier (null)
let entier;

//tant que entier n'est pas un nombre (isnan renverra true)
while (isNaN(entier)){
    //champ de saisie
    entier = prompt("saisis un nombre");
    // je verifie si ma saisie est un nombre
    if (isNaN(entier)){
        alert("ce n'est pas un nombre");
    }
}

// sortie de la boucle ,je renvoie entier
return parseInt(entier);

}

let a = saisirNombre();
let b = saisirNombre();

alert("a: "+ a);
alert("b: "+ a);