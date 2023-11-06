import { redireccionarInicio } from "../utils/redireccionarInicio.js";
import { redireccionarRegistro } from "../utils/redireccionarRegistro.js";
import { redireccionarLogin } from "../utils/redireccionarLogin.js";

window.redireccionarInicioHandler = redireccionarInicio;
window.redireccionarRegistroHandler = redireccionarRegistro;
window.redireccionarLoginHandler = redireccionarLogin;

const header = document.querySelector("header");

export const Navbar = () => {
  const navContent = `
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" style="color: white;">Peliculas</a>
        <img src="../assets/Logo.jpg" alt="logoNav" id="logoNav" />
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
                class="nav-link active btn"
                style="color: white;"
                aria-current="page"
                id="inicioButton"
                onclick="redireccionarInicioHandler()" <!-- Usa la función global -->
              Inicio
              </button>
            </li>
            <li class "nav-item">
              <button
                class="nav-link active btn"
                style="color: white;"
                aria-current="page"
                id="registroButton"
                onclick="redireccionarRegistroHandler()" <!-- Usa la función global para redireccionar al registro -->
              Regístrate
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link active btn"
                style="color: white;"
                aria-current="page"
                id="loginButton"
                onclick="redireccionarLoginHandler()" <!-- Usa la función global para redireccionar al login -->
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

  header.innerHTML = navContent;
};

export default Navbar;
