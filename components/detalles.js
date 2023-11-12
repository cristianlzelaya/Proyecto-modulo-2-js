import { getMovies } from "../js/services/getMovies.js";
import {Navbar} from "../components/navbar.js"

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
});

const main = document.querySelector("main");

export function pelis(movie) {
  const pelisCard =`
  <div class="container">
  <div class="card movie-details">
      <div class="card-body">
          <h3 class="card-title">${movie.name}</h3>
          <p class="card-text">Categoría: ${movie.category}</p>
          <p class="card-text">Descripción: ${movie.description}</p>
          <p class="card-text">URL de la Imagen: ${movie.imageUrl}</p>
          <p class="card-text">URL de la Imagen Destacada: ${movie.featuredImageUrl}</p>
          <video width="100%" height="auto" controls>
              <source src="${movie.videoUrl}" type="video/mp4">
              Tu navegador no soporta el elemento de video.
          </video>
          <button class="btn btn-dark mt-3">Reproducir</button>
      </div>
  </div>
</div>
`;
main.innerHTML = pelisCard;
}
export default pelis

