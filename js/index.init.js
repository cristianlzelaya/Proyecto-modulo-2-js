import { redireccionarInicio } from "./utils/redireccionarInicio.js";
import Navbar from "../components/navbar.js";
import { setMovies } from "./services/setMovies.js";
import { getMovies } from "./services/getMovies.js";
import { imagenDestacada } from "./utils/imgDestacada.js";
let movies;

document.addEventListener("DOMContentLoaded", function () {
  Navbar();
  inicioButton.addEventListener("click", function (e) {
    redireccionarInicio();
    registroButton.addEventListener("click", function () {});
  loginButton.addEventListener("click", function () {});
  console.log("inicio");
  setMovies()
  movies = getMovies();
  console.log(movies);
  renderImgDestacada(movies)
});
const inicioButton = document.getElementById("inicioButton");
const registroButton = document.getElementById("registroButton");
const loginButton = document.getElementById("loginButton");
const imgDestacada = document.getElementById("imgDestacada");

const renderImgDestacada = (movies) => {
  imgDestacada.innerHTML = "";
  movies.map((movie) => {
    const destacada = movie.destacada === true;
    if(destacada){
      imgDestacada.innerHTML += imagenDestacada(movie)
    }
  })
}
