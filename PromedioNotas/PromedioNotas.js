calacularProemdioNotas = function () {
  let valor1;
  let valor2;
  let valor3;
  let promedioF;
  let promedioDecimales;

  valor1 = recuperarFloat("txtnumero1");
  valor2 = recuperarFloat("txtnumero2");
  valor3 = recuperarFloat("txtnumero3");

  promedioF = calcularPromedio(valor1, valor2, valor3);

  promedioDecimales = promedioF.toFixed(2);

  if (promedioDecimales < 5 && promedioDecimales > 0) {
    mostrarTexto("lblResultado", "REPROBADO" + promedioDecimales);
    mostrarImagen("img", "./imagenes/triste.gif");
  } else if(promedioDecimales >= 5 && promedioDecimales <= 8){
     mostrarTexto("lblResultado", "BUEN TRABAJO" + promedioDecimales);
    mostrarImagen("img", "./imagenes/buentrabajo.gif");
  }else if (promedioDecimales >8 && promedioDecimales < 10) {
    mostrarTexto("lblResultado", "EXCELENTE" + promedioDecimales);
      mostrarImagen("img", "./imagenes/exito.gif");
  }else{
    mostrarTexto("lblResultado", " DATOS  INCORRECTOS" );
      mostrarImagen("img", "./imagenes/error.gif");
  }
};
