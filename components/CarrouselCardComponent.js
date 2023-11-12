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
  const peliculas = getMovies();
  const pelicula = peliculas.find((pelicula) => pelicula.id === idMovie);
  if (pelicula) {
    mostrarModal(pelicula);
  }
};

export default CarrouselCardComponent;
