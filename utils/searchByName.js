import { getMovies } from "../js/services/getMovies.js";

export const searchByName = (value) => {
  console.log(value);
  if (!value) {
    return [];
  }
  let arrayMoviesByName = [];
  const movies = getMovies();
  const stringValue = value.trim().toLowerCase();
  movies.forEach((movie) => {
    const movieName = movie.nombre.toLowerCase();
    if (movieName.includes(stringValue)) {
      arrayMoviesByName.push(movie);
    }
    console.log(stringValue);
  });
  return arrayMoviesByName;
};
