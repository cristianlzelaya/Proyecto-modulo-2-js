import { redireccionarInicio } from "./utils/redireccionarInicio.js";
import Navbar from "../components/navbar.js";
import { setMovies } from "./services/setMovies.js";
import { getMovies } from "./services/getMovies.js";
import {getEstrenos} from "./services/getEstrenos.js";
import { getPeliculas } from "./services/getPeliculas.js";
import {getSeries} from "./services/getSeries.js";
import { getDocumentales } from "./services/getDocumentales.js";

let movies;
document.addEventListener("DOMContentLoaded", function () {
  Navbar();
  setMovies();
  movies = getMovies();
  getEstrenos();
  getPeliculas();
  getSeries();
  getDocumentales();
});


const inicioButton = document.getElementById("inicioButton");
const registroButton = document.getElementById("registroButton");
const loginButton = document.getElementById("loginButton");












