import { emailRegex } from "./emailRegex";

/**
 *
 * @param {string} email Recibe un email
 * @returns {bool} Devuelve un booleano dependiendo de si el email es valido o no.
 */

export const validateEmail = (email) => {
  let valid = emailRegex.test(email);
  return valid;
};
