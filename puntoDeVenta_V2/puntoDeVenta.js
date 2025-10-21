calcularValorTotal = function () {
  //variables para recuperar los valores de las cajas de texto

  let nombreProducto = recuperarTexto("txtProducto");
  let precioProducto = recuperarTexto("txtPrecio"); // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
  let cantidad = recuperarInt("txtCantidad"); // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT

  //variables para almacenar los retornos de las funciones
  let valorSubtotal = calcularSubtotal(precioProducto, cantidad);

  mostrarTexto("lblSubtotal", valorSubtotal);

  let valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
  mostrarTexto("lblDescuento", valorDescuento);
  let monto = valorSubtotal - valorDescuento;
  let valorIVA = calcularIva(monto);
  mostrarTexto("lblValorIVA", valorIVA);
  let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
  mostrarTexto("lblTotal", valorTotal);
};

LimpiarCampo = function () {
  let miInput = document.getElementById("");
  if (miInput) {
    miInput.value = "";
  }
};

