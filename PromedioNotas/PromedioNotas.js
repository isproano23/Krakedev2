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

  if (promedioDecimales >= 7) {
    mostrarTexto("lblResultado", "APROBADO" + promedioDecimales);
    mostrarImagen("img", "./imagenes/exito.gif");
  } else {
    mostrarTexto("lblResultado", "REPROBADO" + promedioDecimales);
    mostrarImagen("img", "./imagenes/triste.gif");
  }
};
