export const imagenDestacada = (movies) => {
  return `<div class="${movies.style}">
    
    <h3>"${movies.name}"</h3>
    <p>${movies.descripcion}</p>
    <button class="btn btn-dark">Reproducir</button>
  </div>`
  }
  