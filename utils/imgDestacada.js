export const imagenDestacada = (movies) => {
  return `<div class="container-fluid " >
  <div class="card text-bg-dark ">
  <img src="${movies.imagenDestacada}" class="card-img img-fluid" style="height: 55vh"  alt="...">
  <div class="card-img-overlay">
    <h5 class="fs-2 col-sm-12">${movies.name} </h5>
    <p class="card-text col-sm-12">${movies.descripcion} </p>
    <a class="btn btn-dark" href="#" role="button">Reproducir</a>  
  </div>
</div>
</div>`
  }
  
  //https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/01/hipertextual-walter-white-spin-off-breaking-bad-2019294316.jpg?fit=1200%2C675&quality=50&strip=all&ssl=1