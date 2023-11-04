import { ObtenerUsuarios } from "../utils/obtenerUsuarios.js";

export const validateLoginUser = (email, password) => {
  const users = ObtenerUsuarios();
  const isValidUser = users.some((user) => {
    return email === user.email && password === user.password;
  });
  return isValidUser;
};
