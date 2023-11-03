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
  const email = emailInput.value;
  const password = passwordInput.value;
  const mailValido = emailValid(email);
  const passwordValido = passwordValid(password);
  if (mailValido && passwordValido) {
    crearUsuario({ email, password });
    guardarUsuario();
    redireccionarInicio();
  }
};
signUpForm.addEventListener("submit", registerSubmit);
