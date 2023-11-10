export const ObtenerUsuarioLog = () => {
  let loggedUserJson = localStorage.getItem("loggedUser");
  if (loggedUserJson) {
    let loggedUser = JSON.parse(loggedUserJson);
    return loggedUser;
  } else {
    return null;
  }
};
