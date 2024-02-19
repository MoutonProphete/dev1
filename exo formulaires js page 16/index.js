function verifierSaisie() {
  // Récupérer la valeur saisie dans le champ de formulaire
  saisie = document.getElementById("societe").value;

  // Vérifier si la saisie est vide
  if (saisie === "") {
    // Afficher une alerte si la saisie est vide
    alert("Veuillez saisir quelque chose !");
  }
}

var select = document.getElementById("technoList");
var textarea = document.getElementById("saisieText");

select.addEventListener("change", function () {
  // Réinitialiser le contenu de la zone de texte
  textarea.value = "";
  for (var i = 0; i < select.selectedOptions.length; i++) {
    // Ajouter la valeur de l'option sélectionnée à la zone de texte
    textarea.value += select.selectedOptions[i].text + "\n";
  }
});
