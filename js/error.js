import Navbar from "../components/navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
});

const comeBackThePage = document.getElementById("comeBackButton");

comeBackThePage.addEventListener("click", () => {
  history.back();
});
