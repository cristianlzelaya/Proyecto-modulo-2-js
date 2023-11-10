import { getEstrenos } from "./services/getEstrenos.js";
import CarrouselCardComponent from "../components/CarrouselCardComponent.js";

new Glider(document.querySelector(".glider"), {
  slidesToShow: 5,
  slidesToScroll: 2,
  draggable: true,
  dots: ".dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
});

const estrenosContainer = document.querySelector("#gliderEstrenos");
// estrenosContainer.innerHTML += "<h1>TEST</h1>"

const obtEstrenos = getEstrenos();

for (let i = 0; i < 5; i++) {
  estrenosContainer.innerHtml += "<h1>TEST</h1>"
}

obtEstrenos.map(pelicula => estrenosContainer.innerHtml += CarrouselCardComponent(pelicula));


export const createCarruselItem = () => {
 

 
};

