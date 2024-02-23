// on declare les listes

let booksList = new Array();
let authorsList = new Array();
let listCategories = new Array();

let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

document.addEventListener("DOMContentLoaded", jsonOnload);
let selectAuthors = document.getElementById("listAuthors");
selectAuthors.addEventListener("change", chargeByAuthor);
let selectCategories = document.getElementById("listCategories");
selectCategories.addEventListener("change", chargeByCategory);

// on charge le json au chargement de la page
function jsonOnload() {
  fetch("data/books.json")
    .then((response) => {
      return response.json();
    })
    .then((booksData) => {
      console.log(booksData);
      createList(booksData);
      createListCat(booksData);
      // permet d'afficher la ou les listes avec leur contenu 
    });
}

function createList(_data) {
  for (let i = 0; i < _data.length; i++) {
    let book = _data[i];

    booksList.push(book);
    for (let index = 0; index < book.authors.length; index++) {
      const element = book.authors[index];
      if (authorsList.indexOf(element) == -1) {
        authorsList.push(element);
      }
    }
    // faire la meme chose pour la catégorie
  }
  booksList.sort();
  authorsList.sort();
  console.log(booksList);

  for (let index = 0; index < authorsList.length; index++) {
    const element = authorsList[index];
    let option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    selectAuthors.appendChild(option);
  }

  // faire la meme chose pour la categorie

  showBooks(booksList);
}

function createListCat(_data) {
  for (let i = 0; i < _data.length; i++) {
    let book = _data[i];

    listCategories.push(book);
    for (let index = 0; index < book.categories.length; index++) {
      const element = book.categories[index];
      if (listCategories.indexOf(element) == -1) {
        listCategories.push(element);
      }
    }
  }
  booksList.sort();
  listCategories.sort();
  console.log(booksList);

  for (let index = 0; index < listCategories.length; index++) {
    const element = listCategories[index];
    let option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    selectCategories.appendChild(option);
  }
  showBooks(booksList);
}

function showBooks(_data) {
  let bookListElement = document.getElementById("booksList");
  bookListElement.innerHTML = "";

  for (let index = 0; index < _data.length; index++) {
    const book = _data[index];

    let bookElement = document.createElement("div");
    bookElement.setAttribute("class", "card mb-4");

    let titre = "";
    if (book.title.length > 20) {
      titre = book.title.substring(0, 20) + "(...)";
    } else {
      titre = book.title;
    }

    let description;
    let descriptionShort;

    if (book.shortDescription == null || book.shortDescription == undefined) {
      description = book.longDescription;
      descriptionShort = "";
    } else {
      if (book.shortDescription.length > 20) {
        descriptionShort = book.shortDescription.substring(0, 20) + "(...)";
        description = book.longDescription;
      } else {
        descriptionShort = book.shortDescription;
        description = book.longDescription;
      }
    }

    let image;
    if (book.thumbnailUrl == null || book.thumbnailUrl == undefined) {
      image = "https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png";
    } else {
      image = book.thumbnailUrl;
    }

    bookElement.innerHTML =
      "<img src='" + image + "'/>" + "<h1>" + titre + "</h1>";

    if (description != "") {
      bookElement.innerHTML +=
        "<h4> <span class='infobulle' title='" +
        description +
        "'>" +
        descriptionShort +
        "</span> </h4>";
    }

    let datePubli;
    try {
      datePubli = new Date(book.publishedDate.dt_txt).toLocaleDateString(
        "fr-FR",
        options
      );
    } catch (error) {
      datePubli = "pas de date de publication";
    }
    bookElement.innerHTML += "<h4>" + datePubli + "<h4/>";

    bookListElement.appendChild(bookElement);
  }
}

function chargeByAuthor() {
  let strAuthor = selectAuthors.options[selectAuthors.selectedIndex].text;

  let booksByAuthor = new Array();

  if (strAuthor == "") {
    showBooks(booksList);
  } else {
    for (let index = 0; index < booksList.length; index++) {
      const element = booksList[index];
      if (element.authors.indexOf(strAuthor) != -1) {
        booksByAuthor.push(element);
      }
    }
    showBooks(booksByAuthor);
  }
}

function chargeByCategory() {
  let strCategories = selectCategories.options[selectCategories.selectedIndex].text;

  let booksByCategories = new Array();
  
  if (strCategories == ""){
    showBooks(booksList);
  }else{
    for (let index = 0; index < booksList.length; index++) {
      const element = booksList[index];
      if (element.categories.indexOf(strCategories) != -1) {
        booksByCategories.push(element);
      }
    }
    showBooks(booksByCategories);
  }
}
