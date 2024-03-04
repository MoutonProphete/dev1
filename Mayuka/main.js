const bouton = document.getElementById("bouton");
const champ = document.getElementById("champ");
const message = document.getElementById("message");


bouton.addEventListener("click",afficherProduit);

function afficherProduit(){
    axios.get('https://world.openfoodfacts.org/api/v2/product/' + champ.value )
  .then(function (response) {
    // en cas de réussite de la requête
    console.log(response.data.product.labels);
    console.log(response);
    let labels = document.getElementById("labels"); 
    // on appel ce qu'on veut dans le html
    labels.innerHTML = "le label est" + response.data.product.labels;
    // on lui renvoie les données trouvés dans le json en lui donnant le bon chemin
    let photo = document.getElementById("produit");
            photo.innerHTML = "<span>Package</span>" + "<br>" + "<img src=" + response.data.product.image_front_small_url + ">";

    let ingredients = document.getElementById("ingredients");
    ingredients.innerHTML = "<span>Ingrédients</span><br>" + response.data.product.ingredients_text;

    let allergenes = document.getElementById("allergenes")
    allergenes.innerHTML = response.data.product.allergens;

    let nova = document.getElementById("nova")
    nova.innerHTML = response.data.product.nova_group;

    let nutriscore = document.getElementById("nutriscore")
    nutriscore.innerHTML = response.data.product.nutriscore_2023_tags;

    let palmoil = document.getElementById("palmOil")
    palmoil.innerHTML = response.data.product.from_palm_oil;

    let brand = document.getElementById("brand")
    brand.innerHTML = response.data.product.brands_tags;

    let 
  })
  .catch(function (error) {
    // en cas d’échec de la requête
    console.log(error);
  })
  .finally(function () {
    // dans tous les cas
  });
}
