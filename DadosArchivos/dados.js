jugar = function () {
  let aleatorio;
  aleatorio = lanzarDado();
  cambiarTexto("lblNumero", aleatorio);

  if (aleatorio > 3) {
    cambiarTexto("lblMensaje", "ES MAYOR A 3  GANASTE" ,aleatorio);
  } else {
    cambiarTexto("lblMensaje", "ES MENOR A 3  PERDISTE ESTAS DE MALAS" ,aleatorio);
  }
};
//crear una funcion llamada lanzarDado
//No recibe parametros
//Retorna un numero aleatorio entre 1 y 6
lanzarDado = function () {
  let aleatorio;
  let numeroMultiplicado;
  let numeroEntero;
  let valorDado;
  aleatorio = Math.random(); //entre 0 y 1
  numeroMultiplicado = aleatorio * 6;

  numeroEntero = parseInt(numeroMultiplicado);

  valorDado = numeroEntero + 1;

  return valorDado;
};
