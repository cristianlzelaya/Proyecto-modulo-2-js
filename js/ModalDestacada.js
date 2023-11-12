const mostrarModal = (pelicula) => {
  document.getElementById("modalNombre").textContent = pelicula.nombre;
  document.getElementById("modalCategoria").textContent = pelicula.categoria;
  document.getElementById("modalDescripcion").textContent =
    pelicula.descripcion;
  document.getElementById("modalImagen").src = pelicula.imagen;
  if (pelicula.imagenDestacada) {
    document.getElementById("modalImagenDestacada").src =
      pelicula.imagenDestacada;
    document.getElementById("modalImagenDestacada").style.display = "block";
  } else {
    document.getElementById("modalImagenDestacada").style.display = "none";
  }
  if (pelicula.video) {
    let videoId = pelicula.video.split("v=")[1].split("&")[0];
    let embedUrl = "https://www.youtube.com/embed/" + videoId;

    let iframe = document.getElementById("modalVideoIframe");
    iframe.src = embedUrl;
    iframe.style.display = "block";
  } else {
    document.getElementById("modalVideoIframe").style.display = "none";
  }
  $("#detallesModal").modal("show");
};

export { mostrarModal };
