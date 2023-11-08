import { ObtenerUsuarioLog } from "./obtenerUsuarioLogeado";

export const notLoggedRoute = () => {
  let usuarioLog = ObtenerUsuarioLog();
  if (!usuarioLog) {
    window.location.href = "views/login.html";
  }
};
