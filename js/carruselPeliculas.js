import CarrouselCardComponent from "../components/CarrouselCardComponent.js";
import { getPeliculas } from "./services/getPeliculas.js";

const renderGliders = () => {
  new Glider(document.getElementById("gliderPeliculas"), {
    rewind: true,
    draggable: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: "2,2",
          slidesToScroll: "1",
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: "3.2",
          slidesToScroll: "1",
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: "4.2",
          slidesToScroll: "1",
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: "5.2",
          slidesToScroll: "1",
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
};

const estrenosContainer = document.getElementById("gliderPeliculas");

export const createCarruselItem = () => {
  const obtEstrenos = getPeliculas();
  obtEstrenos.map((pelicula) => {
    if (pelicula.publicado) {
      estrenosContainer.innerHTML += CarrouselCardComponent(pelicula);
    }
  });
};

createCarruselItem();
renderGliders();
