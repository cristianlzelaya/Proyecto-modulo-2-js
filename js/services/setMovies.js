import { movies } from "../../database/peliculas/series.js";

export const setMovies = () => {
  const moviesLocalStorage = JSON.parse(localStorage.getItem("movies"));
  if (!moviesLocalStorage) {
    localStorage.setItem("movies", JSON.stringify(movies));
  }
};
