import { redireccionarInicio } from "../utils/redireccionarInicio.js";

document.addEventListener("DOMContentLoaded", function () {
  const inicioButton = document.getElementById("inicioButton");
  const registroButton = document.getElementById("registroButton");
  const loginButton = document.getElementById("loginButton");
  inicioButton.addEventListener("click", function (e) {
    redireccionarInicio();
  });
  registroButton.addEventListener("click", function () {});
  loginButton.addEventListener("click", function () {});
});
