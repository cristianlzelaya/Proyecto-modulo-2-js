import { getMovies } from "../js/services/getMovies";

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
      <h5>${pelicula.categoria}</h5>
      <a>${pelicula.descripcion}</a>
      <div class="container text-center h-75">
        <div class="row align-items-end containerButtons">
          <div class="col">
            <button class="btn btn-secondary rounded rounded-5 px-2 ms-4 mb-5" id="verMas-${pelicula.id}" data-movie-id="${pelicula.id}" onclick="verMasButtonClick(event)"> Ver mas </button>
          </div>
          <div class="col">
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

window.verMasButtonClick = (event) => {
  const idMovie = event.target.dataset.movieId;
  console.log("ID de la película:", idMovie);
  const peliculas = getMovies();
  const pelicula = peliculas.find((p) => p.id === idMovie);
  if (pelicula) {
    console.log("Pelicula encontrada:", pelicula);
    mostrarModal(pelicula);
  } else {
    console.error(`No se encontró la película con ID: ${idMovie}`);
  }
};

export default CarrouselCardComponent;
