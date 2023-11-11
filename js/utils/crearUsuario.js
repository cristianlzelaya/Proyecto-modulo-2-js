import { ObtenerUsuarios } from "./obtenerUsuarios.js";
import { User } from "../../classes/user.js";

export const crearUsuario = ({ email, password }) => {
  if (email && password) {
    const newUser = new User({ email, password, role: "user" });
    let usuariosExistentes = ObtenerUsuarios() || [];
    usuariosExistentes.push(newUser);
    localStorage.setItem("users", JSON.stringify(usuariosExistentes));
  }
};
