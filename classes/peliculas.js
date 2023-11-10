export class Pelicula {
  constructor(
    nombre,
    categoria,
    descripcion,
    imagen,
    imagenDestacada,
    video,
    publicado,
    id = crypto.randomUUID()
  ) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.imagenDestacada = imagenDestacada;
    this.video = video;
    this.publicado = publicado;
    this.destacada = false;
  }
}
