export const guardarPeliculasEnLocalStorage = (pelicula) => {
  const peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];
  peliculas.push(pelicula);
  localStorage.setItem("peliculas", JSON.stringify(peliculas));
};
