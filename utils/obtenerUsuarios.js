export const ObtenerUsuarios = () => {
  let users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};
