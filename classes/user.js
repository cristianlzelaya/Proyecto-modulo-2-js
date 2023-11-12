export class User {
  constructor({ email, password, role, aprobado }) {
    this.email = email;
    this.password = password;
    this.role = role;
    this.id = crypto.randomUUID();
    this.aprobado = false;
  }
  cambiarEstadoAprobado(aprobado) {
    this.aprobado = aprobado;
  }
}
