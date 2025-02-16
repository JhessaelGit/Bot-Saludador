function inicioDeSaludo() {
  const ahora = new Date();
  const hora = ahora.getHours();
  let inicioSaludo = "";
  if (hora >= 0 && hora < 12) {
    inicioSaludo = "Buenos dias";
  } else if (hora >= 12 && hora < 19) {
    inicioSaludo = "Buenas tardes";
  } else {
    inicioSaludo = "Buenas noches";
  }
  return inicioSaludo;
}

function saludarJoven(genero){
  let saludo = "";
  if (genero === "M") {
    saludo = "Joven";
  } else if (genero === "F") {
    saludo = "Señorita";
  } else {
    saludo = "Sr./Sra.";
  }
  return saludo;
}

function saludarAdulto(genero) {
  let saludo = "";
  if (genero === "M") {
    saludo = "Señor";
  } else if (genero === "F") {
    saludo = "Señora";
  } else {
    saludo = "Sr./Sra.";
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


function saludar(Nombre, Genero,Edad) {
  return inicioDeSaludo() + " " + SaludarPorEdad(Edad,Genero) + " " + Nombre;
}

export default saludar;
