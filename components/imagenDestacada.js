const imagenDestacada = (peliculaDestacada) => {
  const imgDestacada = `<div class="container-fluid">
    <div class="card text-bg-dark">
      <img src="${peliculaDestacada.imagenDestacada}" class="card-img img-fluid" style="height: 55vh" alt="...">
      <div class="card-img-overlay">
        <h5 class="fs-2 col-sm-12">${peliculaDestacada.nombre}</h5>
        <p class="card-text col-sm-12">${peliculaDestacada.descripcion}</p>
        <a class="btn btn-dark" href="#" role="button">Reproducir</a>  
      </div>
    </div>
  </div>`;

  return imgDestacada;
};

export default imagenDestacada;
