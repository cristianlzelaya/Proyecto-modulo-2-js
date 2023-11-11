import { getSeries } from "./services/getSeries.js";
import CarrouselCardComponent from "../components/CarrouselCardComponent.js";

const renderGliders = () =>{
new Glider(document.querySelector('#gliderSeries'), {
  rewind:true,
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      breakpoint: 0,
      settings: {
        slidesToShow: '2,2',
        slidesToScroll: '1',
        itemWidth: 150,
        duration: 0.25
      }
    },{
      
      breakpoint: 576,
      settings: {
        slidesToShow: '3.2',
        slidesToScroll: '1',
        itemWidth: 150,
        duration: 0.25
      }
    },{
      
      breakpoint: 768,
      settings: {
        slidesToShow: '4.2',
        slidesToScroll: '1',
        itemWidth: 150,
        duration: 0.25
      }
    },{
      
      breakpoint: 992,
      settings: {
        slidesToShow: '5.2',
        slidesToScroll: '1',
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
  
});
}


const estrenosContainer = document.querySelector("#gliderSeries");

export const createCarruselItem = () => {
  const obtEstrenos = getSeries();
  obtEstrenos.map(pelicula => estrenosContainer.innerHTML += CarrouselCardComponent(pelicula)); 
};

createCarruselItem()
renderGliders()