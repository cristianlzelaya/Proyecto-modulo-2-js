import { getEstrenos } from "./services/getEstrenos.js";
import CarrouselCardComponent from "../components/CarrouselCardComponent.js";

const renderGliders = () => {
  new Glider(document.getElementById("gliderEstrenos"), {
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

const estrenosContainer = document.getElementById("gliderEstrenos");

export const createCarruselItem = () => {
  const obtEstrenos = getEstrenos();
  obtEstrenos.map(
    (pelicula) =>
      (estrenosContainer.innerHTML += CarrouselCardComponent(pelicula))
  );
};

createCarruselItem();
renderGliders();
