import saludarEspaniol from "./saludadorEspaniol";
import saludarIngles from "./saludadorIngles";
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const Nombre=document.querySelector("#Nombre-Usuario");
const Edad=document.querySelector("#Edad-Usuario");
const Genero=document.querySelector("#Genero-Usuario");
const Idioma=document.querySelector("#Idioma-Usuario");




form.addEventListener("submit", (event) => {
  event.preventDefault();

  const ahora = new Date();
  const hora = ahora.getHours();

  const nombreUsuario=Nombre.value;
  const edadUsuario=Edad.value;
  const generoUsuario=Genero.value;
  const idiomaUsuario=Idioma.value;
  if (idiomaUsuario=="espaniol"){
    div.innerHTML = "<p>" + saludarEspaniol(nombreUsuario,generoUsuario,edadUsuario,hora) + "</p>";
  }
  else if (idiomaUsuario=="ingles"){
    div.innerHTML = "<p>" + saludarIngles(nombreUsuario,generoUsuario,edadUsuario,hora) + "</p>";
  }
});
