//import { getMovies } from "../js/services/getMovies.js";


const estrenosCategorie = (movie) => { //crear el carrusel que se insertará en el HTML desde renderEstrenosCategorie()
    return `<div class="glider">
    <div>your content here</div>
    <div>your content here</div>
    <div>your content here</div>
    <div>your content here</div>
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>`
}
    


export default estrenosCategorie;


