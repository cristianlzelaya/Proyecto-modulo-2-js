import { Navbar } from "../components/navbar.js";

document.addEventListener("DOMContentLoaded", function () {
  Navbar();
  const form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputCodigo = document.querySelector('input[name="email"]');
    const codigoIngresado = inputCodigo.value;
    const email = localStorage.getItem("diguitosPassword");
    const codigoAlmacenado = localStorage.getItem(`diguitosPassword`);
    if (codigoAlmacenado && codigoIngresado === codigoAlmacenado) {
      window.location.href = "restablecerContraseña.html";
    } else {
      alert(
        "Los dígitos ingresados son incorrectos. Por favor, inténtalo de nuevo."
      );
      inputCodigo.value = "";
    }
  });
});
