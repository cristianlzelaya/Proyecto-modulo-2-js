import { toggleAprobado } from "../js/panelAdmin.js";

export const UserRowComponent = (user) => {
  const iconoToggleAprobado = `<i class="fas fa-toggle-on" onclick="toggleAprobadoHandler('${user.id}')"></i>`;

  return `
    <tr>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>${
        user.aprobado ? '<span class="aprobado">✔️</span>' : "Pendiente"
      }</td>
      <td>${iconoToggleAprobado}</td>
    </tr>
  `;
};

const toggleAprobadoHandler = (id) => {
  toggleAprobado(id);
};

window.toggleAprobadoHandler = toggleAprobadoHandler;
