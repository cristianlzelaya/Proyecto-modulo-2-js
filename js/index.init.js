import { redireccionarInicio } from "./utils/redireccionarInicio.js";
import Navbar from "../components/navbar.js";
import { setMovies } from "./services/setMovies.js";
import { getMovies } from "./services/getMovies.js";
import estrenosCategorie from "../components/estrenosCategorie.js";
let movies;

let pelis = [];

document.addEventListener("DOMContentLoaded", function () {
  Navbar();
  // inicioButton.addEventListener("click", function (e) {
  //   redireccionarInicio();
  //   registroButton.addEventListener("click", function () {});
  // loginButton.addEventListener("click", function () {});
  // console.log("inicio");
  setMovies();
  movies = getMovies();
  console.log(movies);
  renderEstrenosCategorie(movies);
  // });
});

const inicioButton = document.getElementById("inicioButton");
const registroButton = document.getElementById("registroButton");
const loginButton = document.getElementById("loginButton");

//------------Categorías-------------//
// const estrenosContainer = document.getElementById("estrenosContainer");

// const renderEstrenosCategorie = (pelis) => {
//   estrenosContainer.innerHTML = "";
  
//   pelis.map((movie) => {
//     const estreno = movie.categoria === "estreno";
    
//     if (estreno) {
//       console.log(movie);
//       estrenosContainer.innerHTML += estrenosCategorie(movie);
//     }
//   });
// };




