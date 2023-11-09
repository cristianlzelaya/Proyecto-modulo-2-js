import { movies } from "../../database/peliculas/series.js";

export const setMovies = () => {
  console.log("getitem");
  const moviesLocalStorage = JSON.parse(localStorage.getItem("movies"));
  console.log();
  if (!moviesLocalStorage) {
    console.log("hola");
    localStorage.setItem("movies", JSON.stringify(movies));
  }
};


