import { getMovies } from "../js/services/getMovies.js";
import { mostrarModal } from "../js/ModalDestacada.js";

const CarrouselCardComponent = (pelicula) => {
  console.log("CarrouselCardComponent clic");
  return `<div class="card hovereffect rounded rounded-2 px-2 mx-2">
    <img
      class="img-fluid rounded rounded-2 h-100" id="imgMoviesModal"
      src=${pelicula.imagen}
      alt=""
    />
    <div class="overlay rounded rounded-2">
      <h2>${pelicula.nombre}</h2>
      <div class="container text-center h-75">
        <div class="row align-items-end containerButtons">
          <div class="col">
            <button class="btn btn-secondary rounded rounded-5 px-2 ms-4 mb-5" id="verMas-${pelicula.id}" data-movie-id="${pelicula.id}" onclick="verMasButtonClick(event)"> Ver mas </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

window.verMasButtonClick = (event) => {
  const idMovie = event.target.dataset.movieId;
  console.log("Clic en Ver Más. ID de la película:", idMovie);
  const peliculas = getMovies(); // Asegúrate de tener la función getMovies() disponible
  const pelicula = peliculas.find((pelicula) => pelicula.id === idMovie);

  if (pelicula) {
    console.log("Pelicula encontrada:", pelicula);
    mostrarModal(pelicula); // Llama a la función mostrarModal
  } else {
    console.error(`No se encontró la película con ID: ${idMovie}`);
  }
};

export default CarrouselCardComponent;
