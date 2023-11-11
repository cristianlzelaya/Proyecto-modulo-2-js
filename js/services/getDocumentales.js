import { getMovies } from "./getMovies.js";


export const getDocumentales = () => {
    const pelis = getMovies();
  
    const documentales = pelis.filter((peli) => peli.categoria === "documental");
  
    return documentales;
  };
  
  console.log(getDocumentales());