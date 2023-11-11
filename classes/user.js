export class User {
  constructor({ email, password, role, aprobado }) {
    this.email = email;
    this.password = password;
    this.role = role;
    this.id = crypto.randomUUID();
    this.aprobado = aprobado;
  }
  cambiarEstadoAprobado(aprobado) {
    this.aprobado = aprobado;
  }
}
