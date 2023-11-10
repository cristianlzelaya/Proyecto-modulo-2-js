import Navbar from "../components/navbar.js";
import { MailInLocalStorage } from "../utils/mailEnLocalStorage.js";
import { redireccionarInicio } from "../utils/redireccionarInicio.js";
import { generarYGuardarCodigo } from "../utils/crearCodigoUnico.js";

emailjs.init("DHIO2pVhw7CJnq14F");

document.addEventListener("DOMContentLoaded", function () {
  Navbar();
  const form = document.getElementById("form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const userEmail = document.querySelector('input[name="email"]').value;
    if (MailInLocalStorage(userEmail)) {
      const verificationCode = generarYGuardarCodigo(userEmail);
      const templateParams = {
        to_name: userEmail,
        to_email: userEmail,
        verification_code: verificationCode,
      };
      try {
        const response = await emailjs.send(
          "service_w6hy2rn",
          "template_jl1cymb",
          templateParams
        );
        console.log("Correo electrónico enviado exitosamente:", response);
        localStorage.setItem("mailRecuperar", userEmail);
        window.location.href = "ingresarDiguitos.html";
      } catch (error) {
        console.error("Error al enviar el correo electrónico:", error);
      }
    } else {
      redireccionarInicio();
    }
  });
});
