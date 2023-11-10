import moviesDb from "../../database/peliculas/series.json" assert { type: "json" };

export const setMovies = () => {
    console.log("getitem");
  const movies = JSON.parse(localStorage.getItem("movies"));
  if (!movies) {
    console.log("hola");
    localStorage.setItem("movies", JSON.stringify(moviesDb));
  }
};
