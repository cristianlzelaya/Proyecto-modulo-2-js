import { redireccionarInicio } from "../utils/redireccionarInicio.js";
import { redireccionarRegistro } from "../utils/redireccionarRegistro.js";
import { redireccionarLogin } from "../utils/redireccionarLogin.js";
import { logout } from "../utils/userNoLog.js";
import { ObtenerUsuarioLog } from "../utils/obtenerUsuarioLogeado.js";
import { getMovies } from "../js/services/getMovies.js";
import { searchByName } from "../utils/searchByName.js";
import { renderSection } from "../js/index.init.js";

window.redireccionarInicioHandler = redireccionarInicio;
window.redireccionarRegistroHandler = redireccionarRegistro;
window.redireccionarLoginHandler = redireccionarLogin;
window.logoutHandler = logout;

const header = document.querySelector("header");
const renderMovieButton = window.location.pathname == "/index.html";
const renderMovieButtonPath = window.location.pathname == "/";

export const Navbar = () => {
  const loggedUser = ObtenerUsuarioLog();
  const navContent = `
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" style="color: white;">PelisGruop</a>
      <img src="../assets/Logo.jpg" alt="logoNav" id="logoNav" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style="background-color: black; border: none;"
      >
        <span class="navbar-toggler-icon" style="background-color: white; display: block; width: 1.5em; height: 0.15em; margin: 0.25em 0; border-radius: 0.25em;"></span>
        <span class="navbar-toggler-icon" style="background-color: white; display: block; width: 1.5em; height: 0.15em; margin: 0.25em 0; border-radius: 0.25em;"></span>
        <span class="navbar-toggler-icon" style="background-color: white; display: block; width: 1.5em; height: 0.15em; margin: 0.25em 0; border-radius: 0.25em;"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-beetwen">
          <li class="nav-item">
            <a
              class="nav-link active btn"
              style="color: white;"
              aria-current="page"
              id="inicioButton"
              onclick="redireccionarInicioHandler()"
            >Inicio</a>
          </li>
          ${
            loggedUser
              ? `
                 <li class="nav-item">
                   <a
                     class="nav-link active btn"
                     style="color: white;"
                     aria-current="page"
                     id="logoutButton"
                     href="#"
                     onclick="logoutHandler()"
                   >Cerrar Sesión</a>
                 </li>
                 ${
                   loggedUser.role === "admin"
                     ? `
                       <li class="nav-item">
                         <a
                           class="nav-link active btn"
                           style="color: white;"
                           aria-current="page"
                           id="adminButton"
                           href="./views/panelAdmin.html"
                         >Admin</a>
                       </li>
                     `
                     : ""
                 }
               `
              : `
                 <li class="nav-item">
                   <a
                     class="nav-link active btn"
                     style="color: white;"
                     aria-current="page"
                     id="loginButton"
                     href="#"
                     onclick="redireccionarLoginHandler()"
                   >Login</a>
                 </li>
                 <li class="nav-item">
                   <a
                     class="nav-link active btn"
                     style="color: white;"
                     aria-current="page"
                     id="registroButton"
                     href="#"
                     onclick="redireccionarRegistroHandler()"
                   >Regístrate</a>
                 </li>
               `
          }
        </ul>
        ${
          renderMovieButton || renderMovieButtonPath
            ? `<form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="searchInput"
            onkeyup="renderHandler(event.target.value)"
          />
          <button class="btn btn-outline-light" type="submit">
            Buscar
          </button>
        </form>`
            : ""
        }
      </div>
    </div>
  </nav>
`;

  header.innerHTML = navContent;
};
const renderHandler = (value) => {
  const resultado = searchByName(value);
  renderSection(resultado);
};

window.renderHandler = renderHandler;

export default Navbar;
