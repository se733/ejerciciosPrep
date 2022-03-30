function saludar (nombre){
  if(nombre == undefined){
  return "Hola!"}
  else{return `Hola, ${nombre}!`}
 }

//funcion para reutilizar
function sumar(a, b) {
  return a + b
}

valor += sumar(4, 5);
    expect(valor).toEqual(9);

valor += sumar(7, 8);
expect(valor).toEqual(15);

