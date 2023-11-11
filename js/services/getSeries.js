import { getMovies } from "./getMovies.js";


export const getSeries = () => {
    const pelis = getMovies();
  
    const series = pelis.filter((peli) => peli.categoria === "serie");
  
    return series;
  };
  
  console.log(getSeries());