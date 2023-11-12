import { Navbar } from "../components/navbar.js";
import { setMovies } from "./services/setMovies.js";
import { getMovies } from "./services/getMovies.js";
import imagenDestacada from "../components/imagenDestacada.js";
import { Admin } from "../classes/admin.js";
import { ObtenerUsuarios } from "../utils/obtenerUsuarios.js";
import { getEstrenos } from "./services/getEstrenos.js";
import { getPeliculas } from "./services/getPeliculas.js";
import { getSeries } from "./services/getSeries.js";
import { getDocumentales } from "./services/getDocumentales.js";

let movies;

document.addEventListener("DOMContentLoaded", function () {
  Navbar();
  setMovies();
  movies = getMovies();
  console.log(movies);
  renderImgDestacada(movies);
  getEstrenos();
  getEstrenos();
  getPeliculas();
  getSeries();
  getDocumentales();
});

console.log(getMovies("movies"));

const imgDestacada = document.getElementById("imgDestacada");

const renderImgDestacada = (movies) => {
  let contenidoHTML = "";
  const peliculaDestacada = movies.find((movie) => movie.favorita === true);
  if (peliculaDestacada) {
    contenidoHTML = imagenDestacada(peliculaDestacada);
  } else {
    contenidoHTML = "No hay una imagen";
  }

  imgDestacada.innerHTML = contenidoHTML;
};

const adminCreate = () => {
  const user = new Admin({
    email: "PruebaRolling@gmail.com",
    password: "Admin83i",
    role: "admin",
    aprobado: true,
  });
  const existingUsers = ObtenerUsuarios();
  const adminExists = existingUsers.some(
    (existingUser) =>
      existingUser.email === user.email && existingUser.role === user.role
  );
  if (!adminExists) {
    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));
  }
};
adminCreate();
