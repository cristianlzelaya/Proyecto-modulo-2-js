import Navbar from "../components/navbar.js";
import { validateEmail } from "../validations/validateEmail.js";
import { validateSignUpPassword } from "../validations/validateSignUpPassword.js";
import { validateExistingEmail } from "../validations/validateExistingEmail.js";
import { crearUsuario } from "../js/utils/crearUsuario.js";
import { redireccionarInicio } from "../js/utils/redireccionarInicio.js";
import { guardarUsuario } from "../js/utils/guardarUsuarioLogeado.js";

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
});
const signUpForm = document.getElementById("signUpForm");
const emailInput = document.getElementById("signUpFormEmailInput");
const passwordInput = document.getElementById("signUpFormPasswordInput");
const passwordFeedbackMessage = document.getElementById(
  "passwordFeedbackMessage"
);

const emailValid = (email) => {
  emailInput.classList.remove("is-valid", "is-invalid");
  const isEmailValid = validateEmail(email) && validateExistingEmail(email);
  if (isEmailValid) {
    emailInput.classList.add("is-valid");
  } else {
    emailInput.classList.add("is-invalid");
  }
  return isEmailValid;
};

const passwordValid = (password) => {
  passwordInput.classList.remove("is-valid", "is-invalid");
  const isPasswordValid = validateSignUpPassword(password);
  if (isPasswordValid) {
    passwordInput.classList.add("is-valid");
    passwordFeedbackMessage.textContent = "";
  } else {
    passwordInput.classList.add("is-invalid");
    passwordFeedbackMessage.textContent =
      "La contraseña ingresada es inválida.";
  }
  return isPasswordValid;
};

const registerSubmit = async (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  const emailValido = emailValid(email);
  const passwordValido = passwordValid(password);
  if (emailValido && passwordValido) {
    crearUsuario({ email, password });
    guardarUsuario();
    redireccionarInicio();
  }
};

signUpForm.addEventListener("submit", registerSubmit);
