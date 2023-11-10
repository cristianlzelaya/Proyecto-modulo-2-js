import Navbar from "../components/navbar.js";
import { setMovies } from "./services/setMovies.js";
import { getMovies } from "./services/getMovies.js";
import { imagenDestacada } from "../js/utils/imgDestacada.js";
let movies;

document.addEventListener("DOMContentLoaded", function () {
  Navbar();
  console.log("inicio");
  setMovies()
  movies = getMovies();
  console.log(movies);
  renderImgDestacada(movies);
})
;

const imgDestacada = document.getElementById("imgDestacada");

const renderImgDestacada = (movies) => {
  imgDestacada.innerHTML = "";
  movies.map((movie) => {
    if(movie.destacada){
      imgDestacada.innerHTML += imagenDestacada(movie)
    }
  })
}
