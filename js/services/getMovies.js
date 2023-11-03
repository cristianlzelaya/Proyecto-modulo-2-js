export const getMovies = () => {
    const moviesJson = localStorage.getItem("movies");
    if (!moviesJson) {
      console.log("No hay productos en el almacenamiento local.");
      return [];
    }
    const movies = JSON.parse(moviesJson);
    return movies;
  };
  