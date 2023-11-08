export const logout = () => {
  localStorage.removeItem("loggedUser");
  window.location.reload();
};
