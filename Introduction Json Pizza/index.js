let button = document.addEventListener("button");
button.addEventListener("click", chargeInfosJson);
function chargeInfosJson() {
  fetch("pizzas.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      createHTML(data);
    });
}
function createHTML(_data){
    // je récupere la balise avec la classe preview
    const preview = document.getElementsByClassName("preview")[0];
    preview.innerHTML = "";

    // je crée un élément pizzaria name qui contiendra le nom de ma pizzeria
    const pizzaName = document.createElement("div");
    pizzaName.innerHTML = _data.Name;
    //je lui rajoute une classe
    pizzaName.setAttribute



















}