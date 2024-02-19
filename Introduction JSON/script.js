fetch("index.json")
  .then((actor) => {
    actor.json();
  })
  .then((data) => {
    // le fichier est converti en Json
    // appelle de la fonction
  });
function createActor (_data) {
    let actorName = document.querySelector(".actorName");
    let actorPicture = document.querySelector(".actorPictures");
    let actorMovies = document.querySelector("actorMovies");

    actorName.innerHTML = _data.firstname + "" + _data.lastname;
    actorPicture.src = _data.picture;

    let movieList = "" ;
    for(i=0;i<_data.movies.length;i++) {
        let movie = _data.movies[i];
        movieList += "<li>" + movie.name + " | " + movie.year + "</li>";

    }
    actorMovies.innerHTML = movieList;
}
