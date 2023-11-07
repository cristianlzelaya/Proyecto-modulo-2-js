export const generarYGuardarCodigo = (email) => {
  const codeKey = `diguitosPassword`;
  const expirationKey = `${codeKey}_expiration`;
  if (localStorage.getItem(codeKey)) {
    localStorage.removeItem(codeKey);
  }
  if (localStorage.getItem(expirationKey)) {
    localStorage.removeItem(expirationKey);
  }
  const verificationCode = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  localStorage.setItem(codeKey, verificationCode);
  return verificationCode;
};
