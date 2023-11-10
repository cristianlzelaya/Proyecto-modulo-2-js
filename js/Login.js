import Navbar from "../components/navbar.js";
import { guardarUsuario } from "../utils/guardarUsuarioLogeado.js";
import { validateLoginUser } from "../validations/validateUserLogeado.js";
import { redireccionarInicio } from "../utils/redireccionarInicio.js";
import { ObtenerUsuarios } from "../utils/obtenerUsuarios.js";

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
  const loginForm = document.getElementById("loginForm");
  const invalidLoginFeedback = document.getElementById("invalidLoginFeedback");
  const feedbackMessage = document.getElementById("feedbackMessage");
  const userLoginFeedback = (bool, message) => {
    invalidLoginFeedback.classList.add("hidden");
    if (!bool) {
      feedbackMessage.textContent = message;
      invalidLoginFeedback.classList.remove("hidden");
    }
  };
  const userLogin = (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    const validacion = validateLoginUser(email, password);
    const users = ObtenerUsuarios();
    const usuarioIndex = users.findIndex(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (usuarioIndex !== -1) {
      const usuario = users[usuarioIndex];
      if (validacion && usuario.aprobado === true) {
        guardarUsuario(email);
        redireccionarInicio();
      } else {
        userLoginFeedback(
          false,
          "Hay un error en el mail o contraseña o el usuario no está aprobado"
        );
      }
    } else {
      userLoginFeedback(false, "Usuario no encontrado");
    }
  };

  loginForm.addEventListener("submit", userLogin);
});
