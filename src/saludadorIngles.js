function inicioDeSaludo() {
  const ahora = new Date();
  const hora = ahora.getHours();
  let inicioSaludo = "";
  if (hora >= 0 && hora < 12) {
    inicioSaludo = "Good Morning";
  } else if (hora >= 12 && hora < 19) {
    inicioSaludo = "Good Afternoon";
  } else {
    inicioSaludo = "Good Evening";
  }
  return inicioSaludo;
}

function saludarJoven(genero){
  let saludo = "";
  if (genero === "M") {
    saludo = "Young";
  } else if (genero === "F") {
    saludo = "Miss";
  } else {
    saludo = "Mr./Mrs.";
  }
  return saludo;
}

function saludarAdulto(genero) {
  let saludo = "";
  if (genero === "M") {
    saludo = "Mister";
  } else if (genero === "F") {
    saludo = "Misses";
  } else {
    saludo = "Mr./Mrs.";
  }
  return saludo;
}

function SaludarPorEdad(edad,genero){
  let saludo = "";
  if (edad < 18) {
    saludo = saludarJoven(genero);
  } else {
    saludo = saludarAdulto(genero);
  }
  return saludo;
}


function saludarIngles(Nombre, Genero,Edad) {
  return inicioDeSaludo() + " " + SaludarPorEdad(Edad,Genero) + " " + Nombre;
}

export default saludarIngles;
