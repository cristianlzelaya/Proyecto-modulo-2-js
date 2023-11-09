import { Navbar } from "../components/navbar.js";
import { Pelicula } from "../classes/peliculas.js";
import { TableRowComponent } from "../components/tableRow.js";
import { getMovies } from "./services/getMovies.js";

const adminTableBody = document.getElementById("adminTableBody");

document.addEventListener("DOMContentLoaded", (event) => {
  Navbar();
  renderAdminTableBody();
  const btnGuardarPeliculaModal = document.getElementById(
    "btnGuardarPeliculaModal"
  );
  const btnGuardarCambios = document.getElementById("btnGuardarCambios");
  btnGuardarCambios.addEventListener("click", () => {});

  btnGuardarPeliculaModal.addEventListener("click", () => {
    const nombre = document.getElementById("inputNombreModal").value;
    const categoria = document.getElementById("inputCategoriaModal").value;
    const descripcion = document.getElementById("inputDescripcionModal").value;
    const imagenUrl = document.getElementById("inputImagenModal").value;
    const videoUrl = document.getElementById("inputVideoModal").value;
    const publicado = document.getElementById("inputPublicadoModal").checked;

    if (!nombre || !categoria || !descripcion || !imagenUrl || !videoUrl) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }
    limpiarCamposModal();
    limpiarCamposModalEditar();
    const nuevaPelicula = new Pelicula(
      nombre,
      categoria,
      descripcion,
      imagenUrl,
      videoUrl,
      publicado
    );
    agregarPelicula(nuevaPelicula);
  });
});

const agregarPelicula = (pelicula) => {
  const tablaPeliculas = document.getElementById("adminTableBody");
  tablaPeliculas.innerHTML += TableRowComponent(pelicula);
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  movies.push(pelicula);
  localStorage.setItem("movies", JSON.stringify(movies));
};

// Aca renderizas con tus peliculas
const renderAdminTableBody = () => {
  adminTableBody.innerHTML = "";
  const movies = getMovies();
  movies.forEach((movie) => {
    const tablaPeliculas = document.getElementById("adminTableBody");
    tablaPeliculas.innerHTML += TableRowComponent(movie);
  });
};

const limpiarCamposModalEditar = () => {
  const formEditarPelicula = document.getElementById("formEditarPelicula");
  formEditarPelicula.reset();
};
const limpiarCamposModal = () => {
  const formAgregarPelicula = document.getElementById("formAgregarPelicula");
  formAgregarPelicula.reset();
};

export const eliminarPelicula = (id) => {
  if (id == null) {
    console.log(
      "ID a eliminar es null o undefined. No se realiza la eliminación."
    );
    return;
  }
  console.log("ID a eliminar:", id);
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const nuevasPeliculas = movies.filter((movie) => movie.id !== id);
  localStorage.setItem("movies", JSON.stringify(nuevasPeliculas));
  renderAdminTableBody();
  console.log(`Película con ID ${id} eliminada.`);
};

export const guardarCambios = (id) => {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const peliculaActualizada = movies.find((movie) => movie.id === id);
  if (peliculaActualizada) {
    peliculaActualizada.nombre = document.getElementById(
      "inputNombreModalEditar"
    ).value;
    peliculaActualizada.categoria = document.getElementById(
      "inputCategoriaModalEditar"
    ).value;
    peliculaActualizada.descripcion = document.getElementById(
      "inputDescripcionModalEditar"
    ).value;
    peliculaActualizada.imagen = document.getElementById(
      "inputImagenModalEditar"
    ).value;
    peliculaActualizada.imagenDestacada = document.getElementById(
      "inputImagenDestacadaModalEditar"
    ).value;
    peliculaActualizada.video = document.getElementById(
      "inputVideoModalEditar"
    ).value;
    peliculaActualizada.publicado = document.getElementById(
      "inputPublicadoModalEditar"
    ).checked;
    localStorage.setItem("movies", JSON.stringify(movies));
    $("#modalEditarPelicula").modal("hide");
  } else {
    console.error("Pelicula no encontrada");
  }
};

export const marcarFavorita = (id) => {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const peliculaSeleccionada = movies.find((movie) => movie.id === id);
  if (peliculaSeleccionada) {
    peliculaSeleccionada.favorita = !peliculaSeleccionada.favorita;
    localStorage.setItem("movies", JSON.stringify(movies));
    renderAdminTableBody();
    console.log(
      `Estado de favorita para la película con ID ${id} actualizado.`
    );
  } else {
    console.error("Pelicula no encontrada");
  }
};

export const publicada = (id) => {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const peliculaSeleccionada = movies.find((movie) => movie.id === id);
  if (peliculaSeleccionada) {
    peliculaSeleccionada.publicado = !peliculaSeleccionada.publicado;
    localStorage.setItem("movies", JSON.stringify(movies));
    renderAdminTableBody();
    console.log(
      `Estado de publicación para la película con ID ${id} actualizado.`
    );
  } else {
    console.error("Pelicula no encontrada");
  }
};

export const mostrarDatosPelicula = (id) => {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const peliculaSeleccionada = movies.find((movie) => movie.id === id);
  if (peliculaSeleccionada) {
    document.getElementById("inputNombreModalEditar").value =
      peliculaSeleccionada.nombre;
    document.getElementById("inputCategoriaModalEditar").value =
      peliculaSeleccionada.categoria;
    document.getElementById("inputDescripcionModalEditar").value =
      peliculaSeleccionada.descripcion;
    document.getElementById("inputImagenModalEditar").value =
      peliculaSeleccionada.imagen;
    document.getElementById("inputImagenDestacadaModalEditar").value =
      peliculaSeleccionada.imagenDestacada;
    document.getElementById("inputVideoModalEditar").value =
      peliculaSeleccionada.video;
    document.getElementById("inputPublicadoModalEditar").checked =
      peliculaSeleccionada.publicado;
    $("#modalEditarPelicula").modal("show");
    const btnGuardarCambios = document.getElementById("btnGuardarCambios");
    btnGuardarCambios.addEventListener("click", () => {
      guardarCambios(id);
      renderAdminTableBody();
    });
  } else {
    console.error("Pelicula no encontrada");
  }
};
