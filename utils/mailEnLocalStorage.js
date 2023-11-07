import { ObtenerUsuarios } from "../utils/obtenerUsuarios.js";
export const MailInLocalStorage = (email) => {
  const usersData = ObtenerUsuarios();
  if (Array.isArray(usersData)) {
    return usersData.some((user) => user.email === email);
  } else {
    return false;
  }
};
