import { getMovies } from "./getMovies.js";


export const getPeliculas = () => {
    const pelis = getMovies();
  
    const peliculas = pelis.filter((peli) => peli.categoria === "pelicula");
  
    return peliculas;
  };
  
  console.log(getPeliculas());