import { ObtenerUsuarios } from "./obtenerUsuarios.js";

export const guardarUsuario = (email) => {
  const users = ObtenerUsuarios();
  const user = users.find((user) => user.email === email);
  if (user) {
    // Almacena el objeto de usuario en localStorage
    const userJson = JSON.stringify(user);
    localStorage.setItem("loggedUser", userJson);
    console.log("Usuario autenticado:", user);
  } else {
    console.log("Usuario no encontrado");
  }
};
