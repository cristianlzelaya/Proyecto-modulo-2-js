import { Navbar } from "../components/navbar.js";
import { setMovies } from "./services/setMovies.js";
import { getMovies } from "./services/getMovies.js";
import { imagenDestacada } from "../utils/imgDestacada.js";
let movies;

document.addEventListener("DOMContentLoaded", function () {
  Navbar();
  inicioButton.addEventListener("click", function (e) {
    registroButton.addEventListener("click", function () {});
    loginButton.addEventListener("click", function () {});
    console.log("inicio");
    setMovies();
    movies = getMovies();
    console.log(movies);
    renderImgDestacada(movies);
  });
});

const imgDestacada = document.getElementById("imgDestacada");

const renderImgDestacada = (movies) => {
  imgDestacada.innerHTML = "";
  movies.map((movie) => {
    const destacada = movie.destacada === true;
    if (destacada) {
      imgDestacada.innerHTML += imagenDestacada(movie);
    }
  });
};
