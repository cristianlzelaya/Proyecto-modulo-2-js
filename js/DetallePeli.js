import { pelis } from "../components/detalles.js";
import {Navbar} from "./components/navbar.js"

const mainDetalles = document.querySelector('main')

document.addEventListener("DOMContentLoaded", () => {
    Navbar();
});


function cargarDetalles() {
    const main = document.querySelector('main');
    const movies = getMovies();
    movies.forEach(movie => {
        const movieCardHTML = pelis(movie);
        main.innerHTML += movieCardHTML;
        const reproducirBtn = main.querySelector('.btn-dark:last-child');
        reproducirBtn.addEventListener('click', () => {
            loadPeliculaDetalles(movie);
        });
    });
}

function loadPeliculaDetalles(movie) {
    const detallesWindow = window.showModalDialog(`
      <html>
        <head>
          <title>Detalles de la Película</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNeoa7RxnatzjcDSCmG1zDSCGc+90JG+FzZt/uUff1VlrVU" crossorigin="anonymous">
        </head>
        <body>
          <div class="container">
            ${pelis(movie)}
          </div>
        </body>
      </html>
    `, 'width=600,height=400,scrollbars=yes,resizable=yes');
    return movie;
  }



//ver mas detalles => {otra ventana detallesPelis.html} al darle a detalle peli obtiene el id de la pelicula => pasamos como parametro a la funcion loadPeliculaDetalles
// y esta funcion se encarga de retornar al componente pelis los datos de la pelicula