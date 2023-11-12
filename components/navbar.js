import { redireccionarInicio } from "../utils/redireccionarInicio.js";
import { redireccionarRegistro } from "../js/utils/redireccionarRegistro.js";
import { redireccionarLogin } from "../utils/redireccionarLogin.js";
import { logout } from "../utils/userNoLog.js";
import { ObtenerUsuarioLog } from "../js/utils/obtenerUsuarioLogeado.js";

window.redireccionarInicioHandler = redireccionarInicio;
window.redireccionarRegistroHandler = redireccionarRegistro;
window.redireccionarLoginHandler = redireccionarLogin;
window.logoutHandler = logout;

const header = document.querySelector("header");

export const Navbar = () => {
  const loggedUser = ObtenerUsuarioLog();

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
              <a
                class="nav-link active btn"
                style="color: white;"
                aria-current="page"
                id="inicioButton"
                href="#"
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
