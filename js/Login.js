import Navbar from "../components/navbar.js";
import { guardarUsuario } from "../utils/guardarUsuarioLogeado.js";
import { validateLoginUser } from "../validations/validateUserLogeado.js";
import { redireccionarInicio } from "../utils/redireccionarInicio.js";

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

    // Aquí utilizamos la función validateLoginUser para verificar las credenciales
    const validacion = validateLoginUser(email, password);

    if (validacion) {
      // Autenticación exitosa, ahora puedes guardar el usuario y redirigir al inicio
      guardarUsuario(email);
      redireccionarInicio();
    } else {
      // Autenticación fallida, muestra un mensaje de error
      userLoginFeedback(false, "Hay un error en el mail o contraseña");
    }
  };

  loginForm.addEventListener("submit", userLogin);
});
