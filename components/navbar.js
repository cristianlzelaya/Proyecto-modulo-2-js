// Importa la función que necesitas
import { redireccionarInicio } from "../utils/redireccionarInicio.js";

// Asigna la función al objeto global (window)
window.redireccionarInicioHandler = redireccionarInicio;

const header = document.querySelector("header");

const Navbar = () => {
  const navContent = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Peliculas</a>
        <img src="assets/Logo.png" alt="logoNav" id="logoNav" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <button
                class="nav-link active"
                aria-current="page"
                id="inicioButton"
                onclick="redireccionarInicioHandler()" <!-- Usa la función global -->
              >
                Inicio
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link active"
                aria-current="page"
                id="registroButton"
              >
                Registrate
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link active"
                aria-current="page"
                id="loginButton"
              >
                Login
              </button>
            </li>
            <li class="nav-item dropdown"></li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  `;

  // Establece el contenido de la barra de navegación en el elemento header
  header.innerHTML = navContent;
};

export default Navbar;
