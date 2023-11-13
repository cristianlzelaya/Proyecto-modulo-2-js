const abrirVentana = (pelicula) => {
  var titulo = pelicula.nombre;
  var ventanaContenido = "<h2>" + titulo + "</h2>";
  if (pelicula.video) {
    let videoId = pelicula.video.split("v=")[1].split("&")[0];
    let embedUrl = "https://www.youtube.com/embed/" + videoId;
    ventanaContenido +=
      '<iframe width="560" height="315" src="' +
      embedUrl +
      '" frameborder="0" allowfullscreen></iframe>';
  } else {
    ventanaContenido += "<p>Video no disponible</p>";
  }
  let nuevaVentana = window.open("", "_blank");
  nuevaVentana.document.write(ventanaContenido);
};

const mostrarModal = (pelicula) => {
  document.getElementById("modalNombre").textContent = pelicula.nombre;
  document.getElementById("modalCategoria").textContent = pelicula.categoria;
  document.getElementById("modalDescripcion").textContent =
    pelicula.descripcion;
  document.getElementById("modalImagen").src = pelicula.imagen;
  document.getElementById("modalImagenDestacada").src =
    pelicula.imagenDestacada;
  const verTrailerBtn = document.getElementById("verTrailerBtn");
  if (pelicula.video) {
    let videoId = pelicula.video.split("v=")[1].split("&")[0];
    let embedUrl = "https://www.youtube.com/embed/" + videoId;
    verTrailerBtn.style.display = "block";
    verTrailerBtn.addEventListener("click", function () {
      const nuevaVentana = window.open("", "_blank");
      nuevaVentana.document.write(`
            <html>
            <head>
                <title>${pelicula.nombre}</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        overflow: hidden;
                        background-color: black; /* Fondo negro */
                    }
                    .video-container {
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    iframe {
                        width: 90%;
                        height: 90%;
                    }
                </style>
            </head>
            <body>
                <div class="video-container">
                    <iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe>
                </div>
            </body>
            </html>
        `);
    });
  } else {
    // Si no hay video oculta el botón
    verTrailerBtn.style.display = "none";
  }
  $("#detallesModal").modal("show");
};

export { mostrarModal, abrirVentana };
