function inicioDeSaludo(){
  const ahora=new Date();
  const hora=ahora.getHours();
  let inicioSaludo='';
  if(hora>=0 && hora<12){
    inicioSaludo="Buenos dias"
  }
  else if(hora>=12 && hora<19){
    inicioSaludo="Buenas tardes"
  }
  else{
    inicioSaludo="Buenas noches"
  }
  return inicioSaludo;
}

function saludoGenero(genero){
  let saludo='';
  if(genero==='Hombre'){
    saludo='Señor'
  }
  else if(genero==='Mujer'){
    saludo='Señora'
  }
  else{
    saludo='Sr./Sra.'
  }
  return saludo;
}

function saludar(Nombre,Genero) {
  return inicioDeSaludo() +" " + saludoGenero(Genero) + " " + Nombre;
}

export default saludar;
