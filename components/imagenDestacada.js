const imagenDestacada = (peliculaDestacada) => {
  const imgDestacada = `<div class="container-fluid">
  <div class="card text-bg-dark" style="position: relative; overflow: hidden;">
      <img src="${peliculaDestacada.imagenDestacada}" class="card-img img-fluid" style="height: 80vh;" alt="...">
      <div class="card-img-overlay">
          <h5 class="fs-2 col-sm-12" style="color: white; margin-bottom: 10px;">${peliculaDestacada.nombre}</h5>
          <a class="btn btn-dark" href="../views/error.html" role="button" style="position: absolute; bottom: 10px; left: 10px; background-color: transparent; color: white; border: 1px solid white;">Reproducir</a>
          <p class="card-text col-sm-12" style="color: white; margin-bottom: 10px;">${peliculaDestacada.descripcion}</p>
      </div>
  </div>
</div>`;
  return imgDestacada;
};

export default imagenDestacada;
