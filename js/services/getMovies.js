export const getMovies = () => {
  let moviesJson = localStorage.getItem("movies");
  if (!moviesJson) {
    console.log("No hay productos en el almacenamiento local.");
    return [];
  }
  return moviesJson ? JSON.parse(moviesJson) : [];
};
