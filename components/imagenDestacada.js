const imagenDestacada = (peliculaDestacada) => {
  const imgDestacada = ` <div class="container-fluid">
  <div class="card text-bg-dark" style="position: relative; overflow: hidden;">
      <img src="${peliculaDestacada.imagenDestacada}" class="card-img img-fluid" style="height: 85vh;" alt="...">
      <div class="card-img-overlay">
        <h5 class="fs-2 col-sm-12 d-inline bg-destacada p-2 text-white mb-5">${peliculaDestacada.nombre}</h5>
          <a class=" reproduccion" href="../views/error.html" role="button" style="position: absolute; bottom: 10px; left: 25px;">Reproducir</a>
          </br>
          </br>
          <!-- Button trigger modal -->
<button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Ver Descripción 🡻
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header text-white bg-modal-destacada">
        <h5 class="modal-title" id="exampleModalLabel">Descripción</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-modal-destacada text-white">
      ${peliculaDestacada.descripcion}
      </div>
      <div class="modal-footer bg-modal-destacada">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
      </div>
  </div>
</div>
  `;
  return imgDestacada;
};

export default imagenDestacada;
