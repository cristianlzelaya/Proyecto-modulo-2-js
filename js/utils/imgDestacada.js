const imagenDestacada = (movies) => {
    const img = document.createElement (`<div>
    <img src="${movies.imagen}" alt="${movies.name}">
    <h3>"${movies.name}"</h3>
    <p>"${movies.descripcion}"</p>
    <button class="btn btn-body-primary">reproducir</button>
  </div>`)
  }
  