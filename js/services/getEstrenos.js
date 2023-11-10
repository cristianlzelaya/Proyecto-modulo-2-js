import { getMovies } from "./getMovies.js";



//console.log(pelis)
export const getEstrenos = () => {
    const pelis = getMovies();



  const estrenos = pelis.filter((peli) =>  peli.categoria === 'estreno')

    
  

  return estrenos;

  
};

console.log(getEstrenos())

