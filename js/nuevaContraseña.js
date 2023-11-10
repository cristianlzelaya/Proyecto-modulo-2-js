import Navbar from "../components/navbar.js";
import { validateSignUpPassword } from "../validations/validateSignUpPassword.js";
import { ObtenerUsuarios } from "../utils/obtenerUsuarios.js";

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
  const password = document.getElementById("Password");
  const repeatPassword = document.getElementById("PasswordRRepeat");
  document
    .getElementById("signUpForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // Comprueba si las contraseñas coinciden
      if (password.value !== repeatPassword.value) {
        alert("Las contraseñas no coinciden");
        return;
      }
      // Valida la contraseña
      const isValid = validateSignUpPassword(password.value);
      if (!isValid) {
        alert("La contraseña no es válida");
        return;
      }
      // Obtiene los usuarios
      let usuarios = ObtenerUsuarios();
      // Obtiene el correo electrónico de localStorage
      const email = localStorage.getItem("mailRecuperar");
      // Encuentra el usuario con el correo electrónico proporcionado
      const usuarioIndex = usuarios.findIndex(
        (usuario) => usuario.email === email
      );
      // Si no se encuentra ningún usuario con ese correo electrónico, muestra un mensaje de error y termina la función
      if (usuarioIndex === -1) {
        alert("No se encontró ningún usuario con ese correo electrónico");
        return;
      }
      // Cambia la contraseña del usuario
      usuarios[usuarioIndex].password = password.value;
      // Guarda los usuarios en localStorage
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      alert("Contraseña cambiada con éxito");
      setTimeout(function () {
        window.location.href = "index.html";
      }, 9000);
    });
});
