import { getMovies } from "./services/getMovies.js";
import {Navbar} from "../components/navbar.js"

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
});

const mainDetalles = document.querySelector("main");

export const pelis = (getMovies = {
  return: `<div class="container">
  <div class="card movie-details">
      <div class="card-body">
          <h3 class="card-title">{{name}}</h3>
          <p class="card-text">Categoria: {{category}}</p>
          <p class="card-text">Descripcion: {{description}}</p>
          <p class="card-text">URL de la Imagen: {{imageUrl}}</p>
          <p class="card-text">URL de la Imagen Destacada: {{featuredImageUrl}}</p>
          <video width="100%" height="auto" controls>
              <source src="{{videoUrl}}" type="video/mp4">
          </video>
          <button class="btn btn-dark mt-3">Reproducir</button>
      </div>
  </div>
</div>`,
});

main.innerHTML = mainDetalles;
