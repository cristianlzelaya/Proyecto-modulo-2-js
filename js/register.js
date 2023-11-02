// Importar las dependencias
import { validateEmail } from "../validations/validateEmail.js";
import { validateSignUpPassword } from "../validations/validateSignUpPassword.js";
import { validateExistingEmail } from "../validations/validateExistingEmail.js";
import { crearUsuario } from "../utils/crearUsuario.js";
import { redireccionarInicio } from "../utils/redireccionarInicio.js";
import { guardarUsuario } from "../utils/guardarUsuarioLogeado.js";
import Navbar from "../components/navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
});

const signUpForm = document.getElementById("signUpForm");
const emailInput = document.getElementById("signUpFormEmailInput");
const passwordInput = document.getElementById("signUpFormPasswordInput");

const emailValid = (email) => {
  // Recibe 'email' como argumento
  signUpFormEmailInput.classList.remove("is-valid", "is-invalid");
  const isEmailValid = validateEmail(email) && validateExistingEmail(email);
  if (isEmailValid) {
    signUpFormEmailInput.classList.add("is-valid");
  } else {
    signUpFormEmailInput.classList.add("is-invalid");
  }
  return isEmailValid;
};

const passwordValid = (password) => {
  // Recibe 'password' como argumento
  signUpFormPasswordInput.classList.remove("is-valid", "is-invalid");
  const isPasswordValid = validateSignUpPassword(password);
  if (isPasswordValid) {
    signUpFormPasswordInput.classList.add("is-valid");
  } else {
    signUpFormPasswordInput.classList.add("is-invalid");
  }
  return isPasswordValid;
};

const registerSubmit = async (e) => {
  e.preventDefault();
  const email = emailInput.value; // Obtén el valor del input de correo
  const password = passwordInput.value; // Obtén el valor del input de contraseña
  const mailValido = emailValid(email); // Pasa 'email' como argumento
  const passwordValido = passwordValid(password); // Pasa 'password' como argumento
  if (mailValido && passwordValido) {
    crearUsuario({ email, password });
    guardarUsuario();
    redireccionarInicio();
  }
};
signUpForm.addEventListener("submit", registerSubmit);
