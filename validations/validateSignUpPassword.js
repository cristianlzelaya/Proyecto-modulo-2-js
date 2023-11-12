import { passwordRegex } from "./passwordRegex";

/**
 *
 * @param {password} password Recibe una contraseña
 * @returns {bool} Devuelve un booleano dependiendo si la contraseña es valida o no.
 */

export const validateSignUpPassword = (password) => {
  let valid = passwordRegex.test(password);
  return valid;
};
