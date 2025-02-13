import saludar from "./saludador";
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const Nombre=document.querySelector("#Nombre-Usuario");
const Edad=document.querySelector("#Edad-Usuario");
const Genero=document.querySelector("#Genero-Usuario");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombreUsuario=Nombre.value;
  const edadUsuario=Edad.value;
  const generoUsuario=Genero.value;

  div.innerHTML = "<p>" + saludar(nombreUsuario) + "</p>";
});
