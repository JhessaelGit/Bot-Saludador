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

}

function saludar(Nombre,Genero) {
  return inicioDeSaludo() + " " + Nombre;
}

export default saludar;
