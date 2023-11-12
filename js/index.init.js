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
import { mostrarModal } from "./ModalDestacada.js";

let movies;

document.addEventListener("DOMContentLoaded", function () {
  Navbar();
  movies = getMovies();
  console.log(movies);
  renderImgDestacada(movies);
  getEstrenos();
  getPeliculas();
  getSeries();
  getDocumentales();
});

setMovies();

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

const section = document.getElementById("searchInputSection");

export const renderSection = (value) => {
  section.innerHTML = "";
  value.map((movie) => {
    const cardHTML = `
      <div class="card">
        <img src="${movie.imagen}" alt="${movie.nombre}" class="card-img-top" style="width: 200px; height: 150px; margin: 10px;">
        <div class="card-body">
          <h5 class="card-title" style="color: white; font-size: 1.5em;">${movie.nombre}</h5>
          <p class="card-text" style="color: white; font-size: 1.2em;">Es un ${movie.categoria} de ${movie.nombre}</p>
          <p class="card-text" style="color: white; font-size: 1em;">${movie.descripcion}</p>
        </div>
      </div>
    `;
    section.innerHTML += cardHTML;
  });
};
