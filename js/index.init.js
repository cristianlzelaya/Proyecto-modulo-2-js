import { Navbar } from "../components/navbar.js";
import { setMovies } from "./services/setMovies.js";
import { getMovies } from "./services/getMovies.js";
import { imagenDestacada } from "../utils/imgDestacada.js";
import { User } from "../classes/user.js";
import { ObtenerUsuarios } from "../utils/obtenerUsuarios.js";

let movies;

document.addEventListener("DOMContentLoaded", function () {
  Navbar();
  setMovies();
  movies = getMovies();
  console.log(movies);
  renderImgDestacada(movies);
});

const imgDestacada = document.getElementById("imgDestacada");

const renderImgDestacada = (movies) => {
  imgDestacada.innerHTML = "";
  movies.map((movie) => {
    const destacada = movie.destacada === true;
    if (destacada) {
      imgDestacada.innerHTML += imagenDestacada(movie);
    }
  });
};

const adminCreate = () => {
  const user = new User({
    email: "PruebaRolling@gmail.com",
    password: "Admin83i",
    role: "admin",
  });
  const existingUsers = ObtenerUsuarios();
  const adminExists = existingUsers.some(
    (existingUser) =>
      existingUser.email === user.email && existingUser.role === user.role
  );
  if (!adminExists) {
    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));
  }
};
adminCreate();
