import { eliminarPelicula } from "../js/panelAdmin.js";
import { publicada } from "../js/panelAdmin.js";
import { marcarFavorita } from "../js/panelAdmin.js";
import { mostrarDatosPelicula } from "../js/panelAdmin.js";

export const TableRowComponent = (movie) => {
  const iconoEditar = `<i class="fas fa-pencil-alt" onclick="mostrarDatosPelicula('${movie.id}')"></i>`;
  const iconoEliminar = `<i class="fas fa-trash-alt" onclick="eliminarPeliculaHandler('${movie.id}')"></i>`;
  const iconoVisibilidad = `<i class="${
    movie.publicado ? "far fa-eye" : "fas fa-eye-slash"
  }" onclick="publicada('${movie.id}')"></i>`;
  const iconoFavorita = `<i class="${
    movie.favorita ? "fas fa-star" : "far fa-star"
  }" onclick="marcarFavorita('${movie.id}')"></i>`;

  return `
        <tr>
          <th scope="row">${movie.id}</th>
          <td>${movie.nombre}</td>
          <td>${movie.categoria}</td>
          <td>${movie.descripcion}</td>
          <td>${iconoEditar}</td>
          <td>${iconoEliminar}</td>
          <td>${iconoVisibilidad}</td>
          <td>${iconoFavorita}</td>
        </tr>
      `;
};

const eliminarPeliculaHandler = (id) => {
  eliminarPelicula(id);
};

const publicadaHandler = (id) => {
  publicada(id);
};

const marcarFavoritaHandler = (id) => {
  marcarFavorita(id);
};

const mostrarDatosPeliculaHandler = (id) => {
  mostrarDatosPelicula(id);
};

window.mostrarDatosPelicula = mostrarDatosPeliculaHandler;
window.eliminarPeliculaHandler = eliminarPeliculaHandler;
window.publicada = publicadaHandler;
window.marcarFavorita = marcarFavoritaHandler;
