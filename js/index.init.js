import { redireccionarInicio } from "./utils/redireccionarInicio.js";
import Navbar from "../components/navbar.js";
import { setMovies } from "./services/setMovies.js";
import { getMovies } from "./services/getMovies.js";
import {createCarruselItem} from "./carrusel.js";
import {getEstrenos} from "./services/getEstrenos.js"

let movies;
document.addEventListener("DOMContentLoaded", function () {
  Navbar();
  //redireccionarInicio();
  setMovies();
  movies = getMovies();
  getEstrenos()
  createCarruselItem()
});

console.log(getMovies('movies'));


const inicioButton = document.getElementById("inicioButton");
const registroButton = document.getElementById("registroButton");
const loginButton = document.getElementById("loginButton");

//------------Categorías-------------//
// 

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


//const estrenosContainer = document.getElementsByClassName('glider');







