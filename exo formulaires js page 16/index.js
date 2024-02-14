function verifierSaisie() {
    // Récupérer la valeur saisie dans le champ de formulaire
    var saisie = document.getElementById("societe").value;
    
    // Vérifier si la saisie est vide
    if (saisie === "") {
        // Afficher une alerte si la saisie est vide
        alert("Veuillez saisir quelque chose !");
    }
}