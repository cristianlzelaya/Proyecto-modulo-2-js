import { movies } from "../../database/peliculas/series.js";

export const setMovies = () => {
<<<<<<< HEAD
  console.log("getitem");
  const moviesLocalStorage = JSON.parse(localStorage.getItem("movies"));
  console.log();
  if (!moviesLocalStorage) {
    console.log("hola");
    localStorage.setItem("movies", JSON.stringify(movies));
=======
    //console.log("getitem");
  const movies = JSON.parse(localStorage.getItem("movies"));
  if (!movies) {
    //console.log("hola");
    localStorage.setItem("movies", JSON.stringify(moviesDb));
>>>>>>> b185f04 (actualizo carrusel)
  }
};


